import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({id, PropertyAddress, PropertyImage}) => {
  return (
      <>
        <div key={id}>
               <Link to={`/all-properties/${id}`}>
               <p>{PropertyAddress}</p>
               </Link>
               <img src={PropertyImage} alt={`home ${id}`} style={{width: '300px'}}/>
         </div>
      </>
  )
}

export default ListItem