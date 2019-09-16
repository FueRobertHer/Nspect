import React from 'react';

class AddObservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observer_id: this.props.currentUser.id,
      lat: null,
      lng: null,
      datetime: new Date(),
      description: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const observation = Object.assign({}, this.state);
    this.props.addObservation(observation)
      .then(() => this.props.history.push('/home'));
  };

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  }

  render() {    
    return (
      <div className="add-obs-form-container">
        <form 
          onSubmit={this.handleSubmit}
          className="add-obs-form">

          <input 
            type="text" 
            placeholder="Species name"
          />
          <input 
            onChange={this.update('datetime')}
            type="datetime-local" 
            placeholder="Date"
          />
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

          <button>submit observation</button>
        </form>
      </div>
    )
  }
}

export default AddObservationForm;