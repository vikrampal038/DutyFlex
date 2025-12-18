import React from 'react'
import { FeatureData } from '../data/FeatureData'
import {useParams } from 'react-router-dom'

const FeaturesDetails = () => {

  const {id} = useParams();
  const Product = FeatureData.find(data => data.id == Number(id));

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1 className='text-2xl font-bold text-center p-1' >This is Feature Details Page </h1>
      <img src={Product.image} alt='ProductImage ' />
      <div>
        <h1 className='text-xl font-bold '>{Product.category}</h1>
        <h2 className='text-xl font-bold '>{Product.description}</h2>
      </div>
    </div>
  )
}
export default FeaturesDetails
