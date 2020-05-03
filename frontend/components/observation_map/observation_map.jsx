import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class ObservationMap extends React.Component {
  constructor(props) {
    super(props)
    this.mapOptions = this.props.mapOptions;
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, this.props.mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    
    if (this.props.singleObs) {
      const targetObs = this.props.observation;
      this.MarkerManager.updateMarkers([targetObs]);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.observations);
    }
  }

  componentDidUpdate() {
    if (this.props.singleObs) {
     //nothing
    } else {
      this.MarkerManager.updateMarkers(this.props.observations)
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(observation) {
    this.props.history.push(`/observations/${observation.id}`);
  }

  render () {
    return (
      <div id="map-container" ref="map">
        map
      </div>
    )
  }
  
}

export default withRouter(ObservationMap);