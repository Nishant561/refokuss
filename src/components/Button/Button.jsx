import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Button(props) {

    const {text} = props
  return (
   
        <button className='flex whitespace-nowrap items-center w-fit text-md font-regular  px-3 py-1 bg-white text-black gap-5 rounded-2xl'>
            {text}
            <MdOutlineSubdirectoryArrowRight/>
        </button>
    
  )
}

export default Button
