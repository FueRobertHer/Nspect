import React from 'react';
import ObservationMap from './observation_map/observation_map';
import ObservationIndex from './observations/observations_index'

// makes the default map the whole world
const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 2
};

const Search = ({ observations, fetchObservations, updateFilter }) => (
  <div>
    <h1>Observations</h1>
    <div className="search-map">
      <ObservationMap 
        observations={observations} 
        updateFilter={updateFilter} 
        mapOptions={mapOptions}
      />
    </div>
    
    <ObservationIndex 
      observations={observations} 
      fetchObservations={fetchObservations} 
      updateFilter={updateFilter}
    />
  </div>
)

export default Search;