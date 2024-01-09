import React from 'react'

const OrderCard = () => {
  return (
    <div className='flex-1 flex flex-col bg-slate-50 p-3 h-20 justify-around rounded-lg border-white shadow-md'>
        <div>
            <span> Online orders</span>
        </div>
       <div>
        <span className='font-bold'> 231</span>
       </div>
    </div>
  )
}

export default OrderCard
