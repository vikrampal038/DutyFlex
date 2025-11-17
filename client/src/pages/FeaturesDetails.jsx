import React from 'react'
import { FeatureData } from '../data/FeatureData'
import { useParams } from 'react-router-dom'


const FeaturesDetails = () => {
    const {id}= useParams();
    const product = FeatureData.find(data=> data.id==Number(id));
    console.log(product);
    

  return (
    <>
      <h1>Features Details PAges</h1>
      <img src={product.image}/>
      <div>
        <h1>{product.category}</h1>
        <h1>{product.describtion}</h1>
      </div>

    </>
  )
}

export default FeaturesDetails
