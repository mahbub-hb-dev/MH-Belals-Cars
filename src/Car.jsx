import React from 'react'

const Car = ({cars}) => {
  const {title, brand, year, price, isPremium} = cars;
  return (
  <div className='border border-gray-300 w-full p-3 rounded-md font-semibold'>
        <h2 className='text-lg font-bold mb-1.5'> {title} </h2>
        <p> Brand : {brand} </p>
        <p> Year : {year} </p>
        <p> Price : {price} </p>
        <p> Premium : {isPremium ? <span> Yes </span> : <span> No </span> } </p>
    </div>
  )
}

export default Car
