import React from 'react';
import { Link } from 'react-router-dom';

import ObservationMap from '../observation_map/observation_map';
import ActivityItem from './activity_item';
import AddActivityForm from './add_activity_form';

class ObservationShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
    this.obs = new FormData()
    // this.state = this.props.observation
  }

  componentDidMount() {
    this.props.fetchObservation(this.props.match.params.observationId);
    this.props.fetchIdentifications();
    this.props.fetchComments();
  }

  componentWillUnmount() {
    this.obs.append('observation[id]', this.props.match.params.observationId);
    // this.obs.append('observation[observer_id]', this.props.observation.observer_id);
    // this.obs.append('observation[description]', this.props.observation.description);
    // this.obs.append('observation[datetime]', this.props.observation.datetime);
    // this.obs.append('observation[lat]', this.props.observation.lat);
    // this.obs.append('observation[lng]', this.props.observation.lng);
    this.props.updateObservation(this.obs)
  }

  handleDelete() {
    this.props.deleteObservation(this.props.match.params.observationId)
    this.props.history.push('/')
  }

  componentDidUpdate() {
    this.render()
  }

  render() {
    const obs = this.props.observation;
    const ids = this.props.identifications;
    const coms = this.props.comments;
    let currentUser = this.props.currentUser;
    if (currentUser === undefined) currentUser = { profilePicURL: 'https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png' };

    if (obs === undefined ) {
      return ( <div></div> );
    } else {
      const mapOptions = {
        center: { lat: obs.lat, lng: obs.lng },
        zoom: 15,
      };

      const editLinks = (
        <div>
          <Link to={`/observations/${obs.id}/edit`} >
            <span
              className="edit-button">
              Edit
              </span>
          </Link>

          <span
            onClick={this.handleDelete}
            className="delete-button">
            Delete
            </span>
        </div>
      )

      const createdAt = obs.created_at ? obs.created_at.split("T")[0] + " at " + obs.created_at.split("T")[1].split(".")[0] : "some time in the past"
      const observedAt = obs.datetime ? obs.datetime.split("T")[0] + " at " + obs.datetime.split("T")[1].split(".")[0] : "some time in the past"
      
      const filteredComments = coms.filter(activity => activity.observation_id === obs.id)
      const comments = filteredComments
        .map(activity =>
          <ActivityItem 
            key={activity.id + 'com'} 
            activity={activity} itemType="com" 
            currentUser={this.props.currentUser} 
            deleteComment={this.props.deleteComment}
            fetchComments={this.props.fetchComments}
          />
        )
      
      const filteredIds = ids.filter(activity => activity.observation_id === obs.id)
      const identifications = filteredIds
        .map(activity => 
          <ActivityItem 
            key={activity.id + 'id'} 
            activity={activity} 
            itemType="id" 
            currentUser={this.props.currentUser}
            addIdentification={this.props.addIdentification}
            deleteIdentification={this.props.deleteIdentification}
            fetchIdentifications={this.props.fetchIdentifications}
          />
      )

      const activityList = identifications.concat(comments).sort(function(a, b) { 
        const actA = a.props.activity.created_at;
        const actB = b.props.activity.created_at;
        if (actA < actB) {
          return -1;
        } else if (actA > actB) {
          return 1;
        } else {
          return 0;
        }
      })

      const highestRatedIds = () => {
        const count = (arr) => {
          const hash = {};
          arr.forEach(id => {
            if (hash[id.guess] == null) hash[id.guess] = 0 
            hash[id.guess] += 1
          });

          const idSorted = Object.keys(hash).sort((a, b) => ( hash[b] - hash[a] ));
          return idSorted[0] 
        }

        let id = count(filteredIds) || 'Life';
        this.obs.append('observation[top_identification]', id)
        return id;
      }

      return (
        <div className="obs-show-main">

          <section className="obs-show-title">
            <span className="obs-title">{highestRatedIds()}</span>
            {(obs.observer_id === currentUser.id) ? editLinks : <span></span>}
          </section>

          <section className="obs-pic-map">
            <section className="obs-pic border">
              <img className="pic" src={obs.imageURL} alt=""/>
            </section>

            <section className="obs-info">
              <div className="obs-user border">
                <Link className="observer-link" to={`/people/${obs.observer_id}`} >
                  {obs.username}
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
                    observation={obs}
                    observationId={obs.id}
                    fetchObservation={this.props.fetchObservation}
                    mapOptions={mapOptions} 
                    className="show-map"
                  />
                </div>
              </div>
            </section>
          </section>

          <section className="obs-desc-section">
            <h3 className="obs-h3">Description</h3>
            <p className="obs-desc">{obs.description}</p>
          </section>

          <section className="obs-activity-section">
            <h3 className="obs-h3">Activity</h3>

            <section className="obs-activity">
              {activityList}
            </section>

            <section className="com-id-form">
              <AddActivityForm 
                addIdentification={this.props.addIdentification}
                addComment={this.props.addComment} 
                observation={obs} 
                currentUser={currentUser}
                fetchIdentifications={this.props.fetchIdentifications}
                fetchComments={this.props.fetchComments}
                // updateObservation={this.props.updateObservation}
              />
            </section>
          </section>
        </div>
      )
    }
  }
}

export default ObservationShow;