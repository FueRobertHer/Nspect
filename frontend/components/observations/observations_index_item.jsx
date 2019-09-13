import React from 'react';
import { Link } from 'react-router-dom';

class ObservationsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const observation = this.props.observation;
    return (
      <li className="observation-list-item">
        <Link to={`/observations/${observation.id}`} >
          <b>{observation.description}</b>
          <br />

        </Link>

      </li>
    )
  }
}

export default ObservationsIndexItem;