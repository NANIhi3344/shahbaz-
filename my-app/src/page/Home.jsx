import React from 'react'
import { Productcard } from '../Component/Productcard'

const productdetails=[
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product1",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product2",
      price:"$100",
      description:"new product"
    },
    {
      image:"https://pixlr.com/images/generator/text-to-image.webp",
      name:"Product3",
      price:"$100",
      description:"new product"
    },
    
  ]
export const Home = () => {
  return (
    <div className='w-full min-h-screen bg-neutral-800'>
    <div className="grid grid-cols-5 gap-4 p-4">{
        productdetails.map((product,index)=>{
            return(
                <>
                <Productcard key={index} {...product}/></>
            )
    })}</div></div>
  )
}