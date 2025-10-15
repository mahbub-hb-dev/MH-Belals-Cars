import React from 'react'
import Car from './Car'

const cars = [
  {
    id: 1,
    title : "Luxury Sedan",
    brand: "Mercedes-Benz",
    year: 2021,
    price : 2500000,
    isPremium: true,
  },
  {
    id: 2,
    title : "Family SUV",
    brand: "Toyota",
    year: 2022,
    price : 300000,
    isPremium: false,
  },
  {
    id: 3,
    title : "Sports Car",
    brand: "Porsche",
    year: 2023,
    price : 6000000,
    isPremium: true,
  },
  {
    id: 4,
    title : "Electric Hatchback",
    brand: "Nissan",
    year: 2024,
    price : 5500000,
    isPremium: false,
  },
  {
    id: 5,
    title : "Luxury Suv",
    brand: "BMW",
    year: 2025,
    price : 9000000,
    isPremium: true,
  },
]

const CarList = () => {
  return (
  <ul className='flex flex-wrap'>
    {
      cars.map((car) => (
        <li key={car.id} className='w-1/3 min-w-[250px] pr-3 pb-3'>
          <Car cars={car} />
        </li>
      ))
    }
  </ul>
  )
}

export default CarList
