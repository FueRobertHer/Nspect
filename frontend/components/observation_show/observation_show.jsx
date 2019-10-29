import React from 'react';
import { Link } from 'react-router-dom';

import ObservationMap from '../observation_map/observation_map';


class ObservationShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchObservation(this.props.match.params.observationId);
    this.props.fetchIdentifications();
  }

  handleDelete() {
    this.props.deleteObservation(this.props.match.params.observationId)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props);
    
    const obs = this.props.observation;

    if (obs === undefined) {
      return ( <div></div> )
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

      const activityList = this.props.identifications.map(identification =>
        // <UserIndexItem key={identification.id} identification={identification} />
        <div className="activity-container">
          <div className="activity-left">
            <img className="profile-icon" src={identification.profilePicURL} alt="" />
            <div className="vert-line"></div>
          </div>
  
          <div className="activity-right">
            <div className="activity-right-header">
              <b>{identification.username}</b> suggested an ID
            </div>
            
            <div className="activity-right-body">
              <p>{identification.guess}</p>
            </div>
          </div>
        </div>
      )
      
      return (
        <div className="obs-show-main">

          <section className="obs-show-title">
            {/* <span className="obs-title">highest rated identification here</span> */}
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
                {(obs.observer_id === this.props.currentUser) ? editLinks : <span></span> }
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
              add comment or id form here
            </section>
          </section>
        </div>
      )
    }
  }
}

export default ObservationShow;