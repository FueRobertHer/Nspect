import React from 'react';
import * as SVGIcon from '../svg/icon_svg';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.login = this.login.bind(this);
  }

  loginForm() {
    return (this.props.formType === 'Log in')
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  handleDemo(e) {
    const ghost = (string, field) => () => {
      if (string.length > 0) {
        this.setState({ [field]: this.state[field] + string[0] });
        setTimeout(ghost(string.slice(1), field), 90);
      }
    }

    const demoUsername = "DemoUser";
    const demoPassword = "password";

    if (this.loginForm()) {
      ghost(demoUsername, "username")();
      ghost(demoPassword, "password")();
    } else {
      this.props.login({username: 'DemoUser', password: 'password'})
    }
    setTimeout(this.login, 1200);
  }

  login() {
    this.props.processForm(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
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
      this.loginForm()
      ? <h1 className='login-message'>Welcome back!</h1>
      : <h1 className='signup-message'>Join the largest group of naturalists in the world!</h1 >
    )
  }

  emailInput() {
    return (
      <section className='input-container'>
        <div className="icon">
          <SVGIcon.Mail />
        </div>
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
      this.loginForm()
      ? 'Log in'
      : 'Create an Account'
    )
  }

  img() {
    return (
      <div className="session-img-container">
        <img className="session-img" src="https://static.inaturalist.org/photos/47930640/large.jpeg?1565595867" alt=""/>
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
          {this.loginForm() ? '' : this.emailInput()}
          <br />
          <section className='input-container'>
            <div className="icon">
              <SVGIcon.User />
            </div>
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
            <div className="icon">
              <SVGIcon.Lock />
            </div>
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
        </form>
        <button
          className='session-form-submit demo'
          type="submit"
          onClick={this.handleDemo}
        >Demo
        </button>
        
        <span>{this.props.otherLink}</span>
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