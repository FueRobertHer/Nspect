import React, { useEffect } from 'react';
import ObservationMap from './observation_map/observation_map';
import ObservationIndex from './observations/observations_index'

// makes the default map the whole world
const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 2
};

const filterObs = (observations, taxa) => {
  if (!taxa) return observations
  return observations.filter( obs => {
    let id = obs.top_identification || ''
    return id.toLowerCase() === taxa
  })
}

const Search = ({ observations, fetchObservations, updateFilter, taxa }) => {

  useEffect(() => {
    fetchObservations();
  }, [])

  const filteredObs = filterObs(observations, taxa)

  return (
    <>
      <div className="obs-index-head">
        <h1 className="obs-index-title">Observations of the World</h1>
      </div>

      <div className="search-map">
        <ObservationMap 
          observations={filteredObs} 
          updateFilter={updateFilter} 
          mapOptions={mapOptions}
        />
      </div>
    </>
  )
}

export default Search;