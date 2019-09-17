import React from 'react';
import MarkerManager from '../../util/marker_manager';

class ObservationMap extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 1
    };

    const map = this.refs.map;

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(map, mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.observations)
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.observations)
    console.log(this.MarkerManager.markers);
    
  }

  render () {

    return (
      <div id="map-container" ref="map">
      map
      </div>
    )
  }
  
}

export default ObservationMap;