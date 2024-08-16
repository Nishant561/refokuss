import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto flex items-center   mt-14'>
      <div className='w-[60%]'>

        <h1 className='text-[11.5rem] text-white leading-none w-full select-none'>refokus.</h1>
      </div>
      <div className='w-[40%] gap-10 flex'>
                <div className='social w-[13.33%] flex flex-col '>
                        <h1 className='text-zinc-600'>Socials</h1>
                        <div className='flex flex-col gap-1 items-start mt-8'>
                            {
                                ['Instagram' , 'Twitter(X?)','LinkedIn'].map((item , index)=>(<a key={index} href="#" className='text-zinc-600'>{item}</a>))
                            }
                        </div>

                </div>
                <div className='sitemap w-[13.33%] '>
                <h1 className='text-zinc-600'>Sitemap</h1>
                <div className='flex flex-col gap-1 items-start mt-8'>
                            {
                                ['Home' , 'Works','Career' ,'Contact'].map((item , index)=>(<a key={index} href="#" className='text-zinc-600'>{item}</a>))
                            }
                        </div>
                </div>
                <div className='last flex flex-col justify-center items-end'>
                        <p className='text-white text-right'> Lorem ipsum dolor sit amet, sit amet,sit amet, consectetur adipisicing elit. Atque, ipsa.</p>
                        <img className='w-[150px]' src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg' />
                </div>
        </div>
    </div>

   
  )
}

export default Footer
