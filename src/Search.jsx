import React from 'react'
import ShowPremium from './ShowPremium'

const Search = () => {
  return (
    <form className='mb-5'>
        <input type="text" className='border rounded w-[250px] px-2 py-1 mr-4' placeholder='Search cars...' />
        <ShowPremium />
    </form>
  )
}

export default Search
