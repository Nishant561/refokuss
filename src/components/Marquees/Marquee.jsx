import React from 'react'

function Marquee({value}) {

    
  return (
    
        <div className='w-full flex gap-16 p-6'>
                {
                    value.map((item , index)=>(
                        
                        <img key={index} src={item} className='w-32 flex-shrink-0' />
                    ))
                }
               
        </div>
    
  )
}

export default Marquee
