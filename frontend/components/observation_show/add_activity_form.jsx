import React from 'react';
import { NavLink } from 'react-router-dom';

class AddActivityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state.activity = 'comment';

    this.toggleActive = this.toggleActive.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.updateObservation(this.props.observation)
  }

  toggleActive(e) {
    const tab = e.target
    if (tab.innerHTML === "Comment") {
      this.setState({activity: 'comment'})
    } else {
      this.setState({activity: 'identify'})
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.activity === 'identify') {
      this.props.addIdentification({
        identifier_id: this.props.currentUser.id,
        observation_id: this.props.observation.id,
        guess: this.state.guess,
        body: this.state.body
      })
        .then(() => location.reload())
    } else if (this.state.activity === 'comment') {
      this.props.addComment({
        commenter_id: this.props.currentUser.id,
        observation_id: this.props.observation.id,
        body: this.state.body        
      })
        .then(() => location.reload())
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {

    let currentUser = this.props.currentUser;
    if (currentUser === undefined) currentUser = { profilePicURL: 'https://nspect-pro.s3-us-west-1.amazonaws.com/default_pic.png' };
    const pic = currentUser.profilePicURL

    const addIdentification = () => (
      <div className="activity-container">
        <div className="activity-left">
          <img className="profile-icon" src={pic} alt="" />
        </div>

        <div className="activity-right">
          <form onSubmit={this.handleSubmit}>
            <div className="activity-right-header border">
              <span className="activity-select" onClick={this.toggleActive} >Comment</span>
              <span className="activity-select tab-header" onClick={this.toggleActive} >Suggest an Identification</span>
            </div>

            <div className="activity-right-body border form-style">
                <input 
                  type="text" 
                  placeholder="Species name" 
                  className="form-input" 
                  onChange={this.update('guess')}
                />
                <textarea 
                  placeholder="Tell us why..." 
                  className="form-input textarea"
                  onChange={this.update('body')}
                ></textarea>
                  
            </div>

            <input className="done-btn" type="submit" value="Done"/>
          </form>
        </div>

      </div>
    );

    const addComment =  () => (
      <div className="activity-container">
        <div className="activity-left">
          <img className="profile-icon" src={pic} alt="" />
        </div>

        <div className="activity-right">
          <form onSubmit={this.handleSubmit}>
            <div className="activity-right-header border">
              <span className="activity-select tab-header" onClick={this.toggleActive} >Comment</span>
              <span className="activity-select" onClick={this.toggleActive} >Suggest an Identification</span>
            </div>

            <div className="activity-right-body border form-style">
                <textarea 
                  placeholder="Leave a comment" 
                  className="form-input textarea comment"
                  onChange={this.update('body')}
                ></textarea>
            </div>
            
            <input className="done-btn" type="submit" value="Done" />
          </form>
        </div>
      </div>
    )

    if (this.state.activity === 'identify') {
      return (
        addIdentification()
      )
    } else {
      return (
        addComment()
      )
    }
  }
}

export default AddActivityForm