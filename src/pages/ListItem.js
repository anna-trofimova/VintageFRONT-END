import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const { item } = props;
  return (
    <Link to={'/items/:id'}>
      <div key={item._id}>
       <p>{item.name}</p>
       <p>{item.price}</p>
      </div>
    </Link>
  )
}
