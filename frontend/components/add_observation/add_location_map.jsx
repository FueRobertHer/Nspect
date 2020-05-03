import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

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
    this.MarkerManager = new MarkerManager(this.map);
    // this.oldMarker = null
    this.registerListeners();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.props.handleClick(coords);
      if (this.oldMarker) this.MarkerManager.resetMarker(this.oldMarker)
      this.oldMarker = this.MarkerManager.setNewMarker(coords)
    });
  }

  render() {

    return (
      <div id="map-container" ref="map">
        map
      </div>
    )
  }
}

export default withRouter(LocationMap);