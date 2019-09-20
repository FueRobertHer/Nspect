import React from 'react';
import ObservationIndexItem from '../observations/observations_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchObservations()
  }

  render() {
    const currentUserObs = this.props.observations.map( obs => (
      <ObservationIndexItem key={obs.id} observation={obs} />
    ))
    
    return (
      <div className="home-main main-margins">
        
        <section className="home-feed-container">
          <ul>
            {currentUserObs}
          </ul>
        </section>
        
      </div>
    )
  }
}

export default Home;