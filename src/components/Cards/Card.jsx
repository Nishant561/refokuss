import React from 'react'
import { BsArrowRight } from "react-icons/bs";
function Card({basis ,text , heading ,project , button ,hover}) {
  return (
    
        
        <div className={`${basis} ${hover} h-full rounded-lg bg-zinc-600 p-3`}>
               <div className='w-full'>

<div className='flex justify-between items-center text-white'>
    <p>{text}</p>
    <BsArrowRight />
    
</div>


<h1 className='mt-7 text-3xl text-white'>{heading}</h1>


<div className='absolute bottom-10 flex flex-col gap-5  justify-between'>
    {

     project === true ?     (<h1 className='font-semibold text-6xl text-white  '>Start a Project</h1>) : (<p className='text-zinc-900 mt-4'>Explore what drives your team.</p>)
    }

    {button && <button className='px-5 py-2 border-white border-[1px] w-fit text-white rounded-full'>Contact Us</button>}
</div>
</div>
        </div>
               

       
       
       
    
  )
}

export default Card
