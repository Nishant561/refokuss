import React from 'react'

function Product({data}) {
    
        
    
  return (
    <>
        
            <div className='w-[16.66%] px-6 py-4 border-r-[1.2px] border-zinc-400 border-t-[1.2px] border-b-[1.2px] flex justify-between items-center'>
                    <img src={data.url} alt=''/>
                    <h1 className='font-bold text-xl text-white'>{data.number}</h1>
            </div>
        
    </>
  )
}

export default Product
