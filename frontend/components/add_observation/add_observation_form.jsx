import React from 'react';
import LocationMap from './add_location_map';
import { withRouter } from 'react-router';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 3
};

class AddObservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observer_id: this.props.currentUser.id,
      lat: null,
      lng: null,
      datetime: new Date(),
      description: '',
      image: null,
      imageURL: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const obs = new FormData();
    obs.append('observation[observer_id]', this.state.observer_id);
    obs.append('observation[description]', this.state.description);
    obs.append('observation[datetime]', this.state.datetime);
    obs.append('observation[lat]', this.state.lat);
    obs.append('observation[lng]', this.state.lng);

    if (this.state.image) {
      obs.append('observation[image]', this.state.image);
    }

    this.props.addObservation(obs)
      .then((obs) => {
        this.props.history.push('/observations/' + obs.observation.id)
      });
  };

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });                                                                                      
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ image: file, imageURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleClick(coords) {
    this.setState({lat:coords.lat, lng:coords.lng})
    const loc1 = document.getElementById('map-location1');
    const loc2 = document.getElementById('map-location2');
    loc1.value = `lat: ${coords.lat.toString().slice(0, 10)}   lng: ${coords.lng.toString().slice(0, 10)}`;
    loc2.value = `lat: ${coords.lat.toString().slice(0, 10)}   lng: ${coords.lng.toString().slice(0, 10)}`;
  }

  toggleModal() {
    const modal = document.getElementById('map-modal');
    modal.classList.toggle("hidden")
  }

  render() {   
    const preview = this.state.imageURL 
      ? <img className="preview-img" src={this.state.imageURL} /> 
      : <img className="preview-no-img" />;
    
    return (
      <div className="add-obs-modal">
        <div className="add-obs-form-container">
          <h1>Add an Observation</h1>
          <form 
            onSubmit={this.handleSubmit}
            className="add-obs-form">
            
            <div className="preview-img-container">
              {preview}
              <section className="add-img-form">
                <input 
                  type="file" 
                  className="new-obs-pic-button"
                  onChange={this.handleFile.bind(this)} 
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
              disabled
            />
            <input 
              onChange={this.update('datetime')}
              type="datetime-local" 
              max={new Date()}
              placeholder="Date"
              className="obs-field"
            />
            <input 
              onClick={this.toggleModal}
              type="text" 
              placeholder="Location"
              className="obs-field"
              id="map-location1"
              autoComplete="off"
            />
            <textarea 
              onChange={this.update('description')}
              placeholder="Description" 
              className="obs-field textarea"
            />

            <button className="submit-obs-button">submit observation</button>
          </form>
        </div>
        <div id="map-modal" className="center hidden" >
          <div className="map-size-limit center" >
            <LocationMap 
              mapOptions={mapOptions}
              handleClick={this.handleClick}
            />
            <input
              type="text"
              placeholder="Location"
              disabled
              className="obs-field"
              id="map-location2"
            />
            <span className="close" onClick={this.toggleModal}>close</span>
          </div> 
        </div>
      </div>
    )
  }
}

export default withRouter(AddObservationForm);