import React from 'react'
import SearchBar from './SearchBar'
import Overview from './Overview'
import Transactions from './Transactions'
import Cards from './Cards'

const Payments = () => {
  return (
    <div className='bg-white flex flex-col'>
      <SearchBar />
      <hr></hr>
      <Overview />
      <Cards />
      <Transactions />
    </div>
  )
}

export default Payments
