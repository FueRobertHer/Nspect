import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  renderErrors() {
    return (
      <ul>{
        this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))
      }</ul>
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
      <input
        className='input'
        type="email"
        onChange={this.update('email')}
        value={this.state.email}
        placeholder="Email"
      />
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

  form() {
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          {this.formMessage()}
          {/* {this.renderErrors()} */}
          <br />
          {this.props.formType === 'Log in' ? '' : this.emailInput()}
          <br />
            <input
              className='input'
              type="text"
              onChange={this.update('username')}
              value={this.state.username}
              placeholder="Username"
            />
          <br />
            <input
              className='input'
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              placeholder="Password"
            />
          <br />
          <input
            className='session-form-submit'
            type="submit"
            value={this.submitValue()}
          />
        </form>
        
        {this.switchForm()}
      </div>
    )
  }

  render() {
    return (
      this.form()
    )
  }
}

export default SessionForm;