import React from 'react'
import {Button} from '../index'
function NavBar() {
  return (
    <div className='text-white max-w-screen-xl flex justify-between items-center mx-auto p-5 border-b-[1px] '>
      <div className='w-[40%] flex items-center justify-between'>
        <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg' alt='logo png' />

        <div className="link flex items-center gap-8">
            {
                ['Home' , 'Work', 'Culture' ,'' , 'News'].map((items , index)=>(
                    items.length === 0? (<span key={index} className='inline-block h-7 w-[2px] bg-zinc-600'></span>):
                    (<a key={index} className='flex items-center gap-1'>
                        {index === 1 &&( <span style={{ boxShadow: '0 0 0.25em #00FF19'}} className='inline-block h-[5px] w-[5px] bg-green-500 rounded-full'></span>)}
                        {items}
                    </a>)
                ))
            }
        </div>
      
      </div>

    <Button text='Getting Started' />


    </div>
  )
}

export default NavBar
