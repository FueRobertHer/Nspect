import React from 'react';
import ObservationsIndexItem from './observations_index_item';
import { fetchObservations, fetchObservation } from '../../util/observations_api_util';

class ObservationsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchObservations();
    fetchObservations(this.props.observations)
      .then( observations => this.setState({observations: observations}))
  };

  render() {    
    const observationsList = this.props.observations.map(observation =>
        <ObservationsIndexItem key={observation.id} observation={observation} />
    )
    return (
      <div className="observation-index">
        <section className="space-between">
          <h1 className="title">Observations</h1>

        </section>

        <div className="observation-index ">
          hi
          <ul className="observation-list">
            {observationsList}
          </ul>
        </div>

        <div className="observation-keymap">
          map goes here
        </div>
      </div>
    )
  }
}

export default ObservationsIndex;