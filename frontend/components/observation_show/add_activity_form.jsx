import React from 'react';
import { NavLink } from 'react-router-dom';

class AddActivityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.state.activity = 'comment';

    this.toggleActive = this.toggleActive.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  toggleActive(e) {
    const tab = e.target
    if (tab.innerHTML === "Comment") {
      this.setState({activity: 'comment'})
    } else {
      this.setState({activity: 'identify'})
    }
  }

  handelSubmit(e) {
    e.preventDefault();

    console.log(this.props);
    
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
          <form onSubmit={this.handelSubmit}>
            <div className="activity-right-header border">
              <span className="activity-select" onClick={this.toggleActive} >Comment</span>
              <span className="activity-select tab-header" onClick={this.toggleActive} >Suggest an Identification</span>
            </div>

            <div className="activity-right-body border form-style">
                <input type="text" placeholder="Species name" className="form-input" />
                <textarea placeholder="Tell us why..." className="form-input textarea"></textarea>
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
          <form onSubmit={this.handelSubmit}>
            <div className="activity-right-header border">
              <span className="activity-select tab-header" onClick={this.toggleActive} >Comment</span>
              <span className="activity-select" onClick={this.toggleActive} >Suggest an Identification</span>
            </div>

            <div className="activity-right-body border form-style">
                <textarea placeholder="Leave a comment" className="form-input textarea comment"></textarea>
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