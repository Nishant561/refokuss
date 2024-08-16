import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='max-w-screen-xl my-10 mx-auto h-[55vh] relative flex gap-1 '>
        <Card basis ={"w-[40%]"} text={'Up next culture'} heading={'Who are we.'}    project={false} button={false} />
        <Card basis={"basis-[60%]"} text={'Get in touch'} heading={'Lets get it Together.'} project={true} button={true} hover={'hover:bg-violet-600'} />
    </div>
  )
}

export default Cards
