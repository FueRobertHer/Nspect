import React from 'react';

class ObservationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchObservation(this.props.match.params.id)
  }

  render() {
    return (
      <div className="obs-show-main">
        
        <section className="obs-show-title">
          <span className="obs-title">highest rated identification here</span>
        </section>

        <section className="obs-pic-map">
          <section className="obs-pic border">

          </section>

          <section className="obs-info">
            <div className="obs-user border">
              observer username here
            </div>

            <div className="obs-map border">
              observation location on map here
            </div>
          </section>
        </section>

        <section className="obs-desc-section">
          <h3 className="obs-h3">Description</h3>
          <p className="obs-desc">this observation's description here</p>
        </section>

        <section className="obs-activity-section">
          <h3 className="obs-h3">Activity</h3>

          <section className="obs-activity">
            comments and identification in a list here
          </section>

          <section className="com-id-form">
            add comment or id form here
          </section>
        </section>
      </div>
    )
  }
}

export default ObservationShow;