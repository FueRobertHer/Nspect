import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class LocationMap extends React.Component {
  constructor(props) {
    super(props)
    this.mapOptions = this.props.mapOptions;
  }

  componentDidMount() {
    const map = this.refs.map;

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(map, this.mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    // if (this.props.singleObs) {
    //   this.props.fetchObservation(this.props.observationId);
    // } else {
      this.registerListeners();
    //   this.MarkerManager.updateMarkers(this.props.observations);
    // }
  }

  // componentDidUpdate() {
  //   if (this.props.singleObs) {
  //     const targetObsKey = Object.keys(this.props.observations[0]);
  //     const targetObs = this.props.observations[targetObsKey];
  //     this.MarkerManager.updateMarkers([targetObs]);
  //   } else {
  //     this.MarkerManager.updateMarkers(this.props.observations)
  //   }
  // }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      // this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.props.handleClick(coords);
    });
  }

  // handleMarkerClick(observation) {
  //   this.props.history.push(`observations/${observation.id}`);
  // }

  // handleClick(coords) {
  //   this.props.history.push({
  //     // pathname: 'observations/upload',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  render() {

    return (
      <div id="map-container" ref="map">
        map
      </div>
    )
  }

}

export default withRouter(LocationMap);