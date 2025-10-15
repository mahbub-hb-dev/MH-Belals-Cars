import React from 'react'
import Search from './Search'
import CarList from './CarList'

const CarContainer = () => {
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-serif font-semibold mb-4'> M.H. Belal's Cars </h1>
        <Search />
        <CarList />
    </div>
  )
}

export default CarContainer
