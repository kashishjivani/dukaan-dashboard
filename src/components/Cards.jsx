import React from 'react'
import OrderCard from './OrderCard'
import AmountCard from './AmountCard'

const Cards = () => {
  return (
    <div className='flex flex-row ml-6'>
      <OrderCard />
      <AmountCard />
    </div>
  )
}

export default Cards
