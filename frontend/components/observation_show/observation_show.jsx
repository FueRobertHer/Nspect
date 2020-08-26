import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ObservationMap from '../observation_map/observation_map';
import ActivityItem from './activity_item';
import AddActivityForm from './add_activity_form';


const parseDateTime = (datetime) => {
  if (!datetime) return "some time in the past";
  let [date, time] = datetime.split("T");
  time = time.split(".")[0];
  return `${date} at ${time}`;
}

const findTopGuess = (identifications) => {
  if (identifications == null) return 'Life'

  const count = {};
  let topGuess = null;

  identifications.forEach(id => {
    if (count[id.guess] == null) count[id.guess] = 0;
    count[id.guess] += 1;
    if (!topGuess || count[id.guess] > count[topGuess]) topGuess = id.guess;
  });

  return topGuess;
}

const ObservationShow = ({ observation, identifications, comments, currentUser, updateObservation, deleteObservation, addIdentification, deleteIdentification, addComment, deleteComment, fetchObservation, fetchIdentifications, fetchComments, match, history }) => {

  useEffect(() => {
    fetchObservation(match.params.observationId);
    fetchIdentifications(match.params.observationId);
    fetchComments(match.params.observationId);
    window.scrollTo(0, 0);
  }, [match.params.observationId])

  const [newObsData, setNewObsData] = useState({});

  // componentWillUnmount() {
  //   this.obs.append('observation[id]', this.props.match.params.observationId);
  //   // this.obs.append('observation[observer_id]', this.props.observation.observer_id);
  //   // this.obs.append('observation[description]', this.props.observation.description);
  //   // this.obs.append('observation[datetime]', this.props.observation.datetime);
  //   // this.obs.append('observation[lat]', this.props.observation.lat);
  //   // this.obs.append('observation[lng]', this.props.observation.lng);
  //   this.props.updateObservation(this.obs)
  // }

  const handleDelete = () => {
    deleteObservation(match.params.observationId).then(_ => {
      history.push('/');
    })
  }

  // return fragment until all fetch finishes
  if (!observation) return <></>
  const ids = observation.identifications.map(key => identifications[key]);
  const coms = observation.comments.map(key => comments[key]);
  if (ids.some(id => id == null) || coms.some(com => com == null)) return <></>

  const observedAt = parseDateTime(observation.datetime);
  const createdAt = parseDateTime(observation.created_at);
  const mapOptions = {
    center: { lat: observation.lat, lng: observation.lng },
    zoom: 15,
  };

  // combine identifications and comments and sort them in chronological order
  const activities = () => {
    return ids.concat(coms).sort((a, b) => {
      if (a.created_at < b.created_at) return -1;
      if (a.created_at > b.created_at) return 1;
      return 0;
    })
  }

  // turn activities to react components
  const activitiesList = (
    activities().map((activity, idx) => {
      let isId = false;
      if (activity.guess) isId = true;
      return (
        <ActivityItem
          key={`observation-activity-${idx}-${activity.id}`}
          activity={activity}
          currentUser={currentUser}
          itemType={isId ? "id" : "com"}
          delete={isId ? deleteIdentification : deleteComment}
          addIdentification={isId ? addIdentification : null}
        />
      )
    })
  )

  // find
  const highestRatedIds = () => {
    const count = {};
    let mostAgreed = null;

    ids.forEach(id => {
      if (count[id.guess] == null) count[id.guess] = 0;
      count[id.guess] += 1;
      if (!mostAgreed || count[id.guess] > count[mostAgreed]) mostAgreed = id.guess;
    });

    return mostAgreed;
  }

  const editDeleteLinks = (
    <div>
      <Link to={`/observations/${observation.id}/edit`} >
        <span
          className="edit-button"
        >
          Edit
        </span>
      </Link>

      <span
        onClick={handleDelete}
        className="delete-button"
      >
        Delete
      </span>
    </div>
  )

  return (
    <div className="obs-show-main">

      <section className="obs-show-title">
        <span className="obs-title">{highestRatedIds()}</span>
        {(observation.observer_id === currentUser.id) ? editDeleteLinks : <span></span>}
      </section>

      <section className="obs-pic-map">
        <section className="obs-pic border">
          <img className="pic" src={observation.imageURL} alt=""/>
        </section>

        <section className="obs-info">
          <div className="obs-user border">
            <Link className="observer-link" to={`/people/${observation.observer_id}`} >
              {observation.username}
            </Link>
          </div>

          <div className="obs-map border center">
            <div className="obs-detail">
              <div className="datetime-container">
                <p className="datetime-label">Observed at:</p>
                <p>{observedAt}</p>
              </div>

              <div className="datetime-container">
                <p className="datetime-label">Created at:</p>
                <p>{createdAt}</p>
              </div>
            </div>

            <div className="map-container border">
              <ObservationMap 
                singleObs={true}
                observation={observation}
                observationId={observation.id}
                mapOptions={mapOptions} 
                className="show-map"
              />
            </div>
          </div>
        </section>
      </section>

      <section className="obs-desc-section">
        <h3 className="obs-h3">Description</h3>
        <p className="obs-desc">{observation.description}</p>
      </section>

      <section className="obs-activity-section">
        <h3 className="obs-h3">Activity</h3>

        <section className="obs-activity">
          {activitiesList}
        </section>

        <section className="com-id-form">
          <AddActivityForm 
            addIdentification={addIdentification}
            addComment={addComment} 
            observation={observation} 
            currentUser={currentUser}
            // updateObservation={updateObservation}
          />
        </section>
      </section>
    </div>
  )
}

export default ObservationShow;