import React from 'react';
// import { ReactComponent as EmailIcon } from '../../../app/assets/images/envelope-solid.svg';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.state.errors = [];
  }

  handleDemo(e) {
    this.update('username')
  
  }

  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/home'));
  };

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  renderErrors() {
    this.state.errors = this.props.errors
    return (
      <ul className="errors-container">
        {this.state.errors.map((error, i) => (
          <li key={`error-${i}`} className="errors-item">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formMessage() {
    return (
      this.props.formType === 'Log in'
      ? <h1 className='login-message'>Welcome back!</h1>
      : <h1 className='signup-message'>Join the largest group of naturalists in the world!</h1 >
    )
  }

  emailInput() {
    return (
      <section className='input-container'>
        <img className="icon" src="assets/envelope-solid.svg" />
        {/* <EmailIcon /> */}
        <input
          className='input'
          type="email"
          onChange={this.update('email')}
          value={this.state.email}
          placeholder="Email"
        />
      </section>
    )
  }

  submitValue() {
    return (
      this.props.formType === 'Log in'
      ? 'Log in'
      : 'Create an Account'
    )
  }

  switchForm() {
    return (
      this.props.formType === 'Log in'
      ? <span>{this.props.otherLink}</span>
      : <span>{this.props.otherLink}</span>
    )
  }

  img() {
    return (
      <div className="session-img">
        img goes here
      </div>
    )
  }

  form() {
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          {this.formMessage()}


          <br />
          {this.props.formType === 'Log in' ? '' : this.emailInput()}
          <br />
          <section className='input-container'>
            <input
              className='input'
              type="text"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="Username"
            />
          </section>
          <br />
          <section className='input-container'>
            <input
              className='input'
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="Password"
            />
          </section>
          <br />
          <input
            className='session-form-submit'
            type="submit"
            value={this.submitValue()}
          />
          <button
            className='session-form-submit'
            type="submit"
            onClick={this.handleDemo}
          >Demo</button>
        </form>
        
        {this.switchForm()}
      </div>
    )
  }

  render() {
    return (
      <div className="session-container-container">
        {this.img()}
        {this.form()}
      </div>
    )
  }
}

export default SessionForm;