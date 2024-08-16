import React from 'react'
import Button from '../Button/Button'
function Stripe({data , mover , count}) {
  return (
    
        <div  className=' transition-all py-[10%] duration-300 w-full  bg-blue-500    h-[23rem]'>
               
               <div onMouseEnter={()=>mover(count)} className='hover:bg-neutral-500 max-w-screen-xl mx-auto bg-red-500 flex  justify-between'>
                <h1 className='text-6xl font-semibold text-white'>{data.title}</h1>

               
                <div className='flex flex-col w-[40%] '>
                    <p className='text-white mb-4 text-md'>{data.description}</p>
                    <div className='flex gap-4 items-center' >

                    <Button text='Getting Started' />
                    {data.caseStudy && <Button text='Case Study' /> }

                    </div>
                </div>
                </div>
        </div>
    
  )
}

export default Stripe
