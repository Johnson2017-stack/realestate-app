import React from 'react';
import propertyList from '../propertyList';

import Title from '../components/Title';
import ListItem from '../components/ListItem';

const AllProperties = () => {
  return (
    <>
      <Title pageName="All Available Properties"/>

      {Object.entries(propertyList).map(([id, {address, image}]) => (
         <ListItem 
            id={id}
            PropertyAddress={address}
            PropertyImage={image} />
      ))}
    </>
  )
}

export default AllProperties
