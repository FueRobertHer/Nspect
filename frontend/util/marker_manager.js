export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(observations) {
    const observationsObj ={};
    observations.forEach(obs => observationsObj[obs.id] = obs);

    observations
      .filter(obs => !this.markers[obs.id])
      .forEach(newObs => this.createMarkerFromObs(newObs, this.handleClick))

    Object.keys(this.markers)
      .filter(obsId => !observationsObj[obsId])
      .forEach((obsId) => this.removeMarker(this.markers[obsId]))
  }

  createMarkerFromObs(obs) {
    const obsLatLng = new google.maps.LatLng(obs.lat, obs.lng);
    const obsMarker = new google.maps.Marker({
      position: obsLatLng,
      map: this.map,
      observationId: obs.id,
      title: obs.description //this needs to show the top identification
    })

    obsMarker.addListener('click', () => this.handleClick(obs));
    this.markers[obsMarker.observationId] = obsMarker;
  }

  setNewMarker(latLng) {
    let marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      draggable: false,
      id: 'new'
    });

    this.markers.new = marker;
    return marker
  }

  resetMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

  removeMarker(marker) {
    this.markers[marker.observationId].setMap(null);
    delete this.markers[marker.observationId];
  }
}