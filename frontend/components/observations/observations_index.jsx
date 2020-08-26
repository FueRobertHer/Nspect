import React from 'react';
import ObservationsIndexItem from './observations_index_item';

const ObservationsIndex = ({}) => {

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
    </div>
  )
}

export default ObservationsIndex;