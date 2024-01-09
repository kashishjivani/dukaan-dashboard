import React from 'react'

const AmountCard = () => {
  return (
    <div className='flex-1 flex flex-col bg-slate-50 p-3 h-20 justify-around rounded-lg border-white shadow-md ml-5'>
        <div>
            <span> Amount received</span>
        </div>
       <div>
        <span className='font-bold'> ₹23,92,312.19</span>
       </div>
    </div>
  )
}

export default AmountCard
