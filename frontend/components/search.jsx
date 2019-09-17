import React from 'react';
import ObservationMap from './observation_map/observation_map';
import ObservationIndex from './observations/observations_index'

const Search = ({ observations, fetchObservations }) => (
  <div>
    <h1>Observations</h1>
    <ObservationMap observations={observations} />
    <ObservationIndex observations={observations} fetchObservations={fetchObservations}/>
  </div>
)

export default Search;