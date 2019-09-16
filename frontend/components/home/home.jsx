import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-main">
        Home page

        <section className="home-feed-container">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </section>
        
      </div>
    )
  }
}

export default Home;