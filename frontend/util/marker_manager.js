export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(observations) {
    // for (let i = 0; i < observations.length; i++) {
    //   let obs = observations[i];
    //   this.markers[obs.id]
    //     ? undefined
    //     : this.createMarkerFromObs(obs)
    // }

    const observationsObj ={};
    observations.forEach(obs => observationsObj[obs.id] = obs);

    observations
      .filter(obs => !this.markers[obs.id])
      .forEach(newObs => this.createMarkerFromObs(newObs))

    Object.keys(this.markers)
      .filter(obsId => !observationsObj[obsId])
      .forEach((odsId) => this.removeMarker(this.markers[obsId]))
  }

  createMarkerFromObs(obs) {
    
    // const obsLatLng = new google.maps.LatLng(obs.lat, obs.lng);
    const obsLatLng = {lat: obs.lat, lng: obs.lng}

    console.log(obsLatLng);

    const obsMarker = new google.maps.Marker({
      position: obsLatLng,
      map: this.map,
      observationId: obs.id,
      title: obs.description //this needs to show the top identification
    })

    // this.markers.addListener('click', () => this.handleClick(obs));
    this.markers[obsMarker.observationId] = obsMarker;
  }

  removeMarker(marker) {
    this.markers[marker.observationId].setMap(null);
    delete this.markers[marker.observationId];
  }
}