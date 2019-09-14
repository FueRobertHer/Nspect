import React from 'react';
import ObservationsIndexItem from './observations_index_item';

class ObservationsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchObservations()
  };

  render() {
    console.log(this.props.observations);
    
    const observationsList = this.props.observations.map(observation =>
      <ul className="observation-list">
        <ObservationsIndexItem key={observation.id} observation={observation} />
      </ul>
    )
    return (
      <div className="observation-index">
        <section className="space-between">
          <h1 className="title">Observations</h1>

        </section>

        <div className="observation-index ">
          hi
          {observationsList}
        </div>

        <div>
          map goes here
        </div>
      </div>
    )
  }
}

export default ObservationsIndex;