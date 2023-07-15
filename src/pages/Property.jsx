import React from 'react';
import Title from '../components/Title';
import propertyList from '../propertyList';
import { useParams } from 'react-router-dom';

const Property = () => {

   const { id } = useParams();
   const property = propertyList[id];

   const { address, image } = property;

  return (
    <>
      <Title pageName="Individual Property page" />

      <img src={image} alt={`property ${id}`} style={{width: '650px'}}/>
      <p>{address}</p>
    </>
  )
}

export default Property;