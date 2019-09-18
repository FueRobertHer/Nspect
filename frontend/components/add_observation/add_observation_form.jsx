import React from 'react';
import { withRouter } from 'react-router';

// lat: new URLSearchParams(location.search).get('lat'),
// lng: new URLSearchParams(location.search).get('lng')

class AddObservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
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
  }

  handleSubmit(e) {
    e.preventDefault();
    const obs = new FormData();
    obs.append('observation[observer_id]', this.state.observer_id);
    obs.append('observation[description]', this.state.description);
    obs.append('observation[datetime]', this.state.datetime);
    obs.append('observation[lat]', this.coords['lat']);
    obs.append('observation[lng]', this.coords['lng']);

    if (this.state.image) {
      obs.append('observation[image]', this.state.image);
    }

    this.props.addObservation(obs)
      .then(() => this.props.history.push('/home'));
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

  render() {   
    console.log(this.state);
    
    const preview = this.state.imageURL 
      ? <img height="70%" width="95%" src={this.state.imageURL} /> 
      : <img height="70%" width="95%" />;
    
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
                <h3 className="button-holder">Add an Image</h3>
                <input type="file" className="new-obs-pic-button"
                  onChange={this.handleFile.bind(this)} />
              </section>
            </div>

            <input 
              type="text" 
              placeholder="Species name"
              className="obs-field"
            />
            <input 
              onChange={this.update('datetime')}
              type="datetime-local" 
              max={new Date()}
              placeholder="Date"
              className="obs-field"
            />
            <input 
              // onClick={}
              type="text" 
              placeholder="Location"
              className="obs-field"
            />
            <textarea 
              onChange={this.update('description')}
              placeholder="Description" 
              className="obs-field textarea"
            />

            <button className="submit-obs-button">submit observation</button>
          </form>
        </div>
        <div className="map-modal">
          <div className="map">
            map here
          </div> 
        </div>
      </div>
    )
  }
}

export default withRouter(AddObservationForm);