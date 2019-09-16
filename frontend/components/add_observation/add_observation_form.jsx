import React from 'react';
import * as Datetime from 'react-datetime';

var date = new Date();

class AddObservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      datetime: new Date(),
      description: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    const observation = Object.assign({}, this.state);
    this.props.addObservation(observation)
      .then(() => this.props.history.push('/observations/'));
  };

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    console.log(this.state);
    
    return (
      <div className="add-obs-form-container">
        <form className="add-obs-form">
          <input 
            type="text" 
            placeholder="Species name"
          />
          {/* <input 
            onChange={this.update('datetime')}
            type="datetime-local" 
            placeholder="Date"
          /> */}

          <Datetime inputProps={{ placeholder: ' Date' }} />
      
          <input 
            type="text" 
            placeholder="Location" 
          />
          <textarea 
            onChange={this.update('description')}
            cols="30" 
            rows="10" 
            placeholder="Description" 
          />

          <button >submit observation</button>
        </form>
      </div>
    )
  }
}

export default AddObservationForm;