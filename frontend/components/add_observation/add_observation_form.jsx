import React, { useEffect, useState, useRef } from 'react';
import LocationMap from './add_location_map';
import { withRouter } from 'react-router';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 3
};

const AddObservationForm = ({currentUser, addObservation, addIdentification, history}) => {

  const [observation, setObservation] = useState({
    observer_id: currentUser.id,
    datetime: new Date(),
    lat: null,
    lng: null,
    description: null,
    image: null,
    imageURL: null,
  });
  const [latLng, setLatLng] = useState('');
  const [guess, setGuess] = useState('');
  const modalRef = useRef(null);

  const update = field => e => {
    setObservation(Object.assign({}, observation, {[field]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obsForm = new FormData();
    obsForm.append('observation[observer_id]', observation.observer_id);
    obsForm.append('observation[description]', observation.description);
    obsForm.append('observation[datetime]', observation.datetime);
    obsForm.append('observation[lat]', observation.lat);
    obsForm.append('observation[lng]', observation.lng);
    if (observation.image) obs.append('observation[image]', observation.image);

    addObservation(obsForm).then(data => 
      addIdentification({
        identifier_id: currentUser.id,
        guess,
        observation_id: data.observation.id
      })).then(data => {
        console.log(data)
        history.push(`/observations/${data.identification.observation_id}`)
      })
  };

  const handleFile = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setObservation(Object.assign({}, observation, {image: file, imageURL: fileReader.result}));
    };
    // window.file = file
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  const placeMarker = (coords) => {
    setObservation(Object.assign({}, observation, {lat: coords.lat, lng: coords.lng}));
    const lat = coords.lat.toString().slice(0, 10);
    const lng = coords.lng.toString().slice(0, 10);
    setLatLng(`lat: ${lat}   lng: ${lng}`);
  }

  const toggleModal = () => {
    console.log(modalRef.curent)
    modalRef.current.classList.toggle("hidden")
  }
  
  const preview = observation.imageURL 
    ? <img className="preview-img" src={observation.imageURL} /> 
    : <img className="preview-no-img" />;

  const locationMapModal = (
    <div ref={modalRef} id="map-modal" className="center hidden" >
      <div className="map-size-limit center" >
        <LocationMap
          mapOptions={mapOptions}
          placeMarker={placeMarker}
        />
        <input
          type="text"
          placeholder="Location"
          value={latLng}
          readOnly
          className="obs-field"
          id="map-location2"
        />
        <span className="close" onClick={toggleModal}>close</span>
      </div>
    </div>
  )
    
  return (
    <div className="add-obs-modal">
      <div className="add-obs-form-container">
        <h1>Add an Observation</h1>
        <form 
          onSubmit={handleSubmit}
          className="add-obs-form"
        >
          
          <div className="preview-img-container">
            {preview}
            <section className="add-img-form">
              <input 
                type="file" 
                className="new-obs-pic-button"
                onChange={handleFile} 
                name="file" 
                id="file"
              />
              <label htmlFor="file" className="add-img-button center">Add an Image</label>
            </section>
          </div>

          <input 
            type="text" 
            placeholder="Species name"
            className="obs-field"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <input 
            onChange={update('datetime')}
            type="datetime-local" 
            max={new Date()}
            className="obs-field"
          />
          <input 
            onClick={toggleModal}
            type="text" 
            placeholder="Location"
            value={latLng}
            readOnly
            className="obs-field"
            id="map-location1"
            autoComplete="off"
          />
          <textarea 
            onChange={update('description')}
            placeholder="Description" 
            className="obs-field textarea"
          />

          <button className="submit-obs-button">submit observation</button>
        </form>
      </div>

      {locationMapModal}
    </div>
  )
}


export default withRouter(AddObservationForm);