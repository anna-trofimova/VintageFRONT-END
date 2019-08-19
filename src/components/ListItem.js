import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const { item } = props;
  return (
    <Link to={{
        pathname: `/items/${item._id}`,
        state: {
          id: item._id
        }
      }}
    >
      <div key={item._id}>
       <p>{item.name}</p>
       <p>{item.price}</p>
       <p>{item.img}</p>
      </div>
    </Link>
  )
}
