import React from 'react';
import { Link } from 'react-router-dom';

const ObservationsIndexItem = ({observation}) => {
  return (
    <li className="observation-list-item">
      <Link to={`/observations/${observation.id}`} >
        <div className="item-container">
          <div object-fit="cover" className="item-img-container">
            <img className="item-img" src={observation.imageURL} alt=""/>
          </div>
          <b className="item-title">{observation.description}</b>
        </div>
      </Link>
    </li>
  )
}

export default ObservationsIndexItem;