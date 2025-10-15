import React from 'react'

const ShowPremium = () => {
  return (
    <span className='max-md:block max-md:my-2.5'>
        <input type="checkbox" id='ispremium' /> 
        <label htmlFor="ispremium"> Show premium cars only </label>
    </span>
  )
}

export default ShowPremium
