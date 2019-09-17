import React from 'react';
import ObservationMap from './observation_map/observation_map';
import ObservationIndex from './observations/observations_index'

const Search = ({ observations, fetchObservations, updateFilter }) => (
  <div>
    <h1>Observations</h1>
    <ObservationMap observations={observations} updateFilter={updateFilter} />
    <ObservationIndex observations={observations} fetchObservations={fetchObservations} updateFilter={updateFilter}/>
  </div>
)

export default Search;