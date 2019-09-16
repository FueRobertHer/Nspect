import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {    
    this.props.fetchUser(this.props.match.params.userId)
    
  }

  render() {
    const user = this.props.user;

    if (user === undefined) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
         <h1>{user.username}</h1>
          <section>
            <h2>{user.created_at}</h2>
          </section>

        </div>
      )
    }

  }
}

export default UserShow;