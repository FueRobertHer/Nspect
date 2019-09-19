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

    this.map = new google.maps.Map(map, this.mapOptions);
    // this.map = new google.maps.Map(mapDOMNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.registerListeners();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.props.handleClick(coords);
    });
  }

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