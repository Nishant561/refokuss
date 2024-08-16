
import React, { useEffect, useState } from 'react'
import {useMotionValueEvent, useScroll} from 'framer-motion'
function Home() {

      

   const [image , setImage] = useState([
    {url:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , top:"50%" , left:"50%" , isActive:false},
    {url:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , top:"56%" , left:"44%" , isActive:false},
    {url:'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , top:"45%" , left:"56%" , isActive:false},
   

])


const {scrollYProgress} = useScroll()
    

  scrollYProgress.on("change" , (data)=>{

    function showImage(arr){
      setImage(prev => prev.map((item , index)=>(
        arr.indexOf(index) === -1? {...item , isActive:false} : {...item , isActive:true}
      )))
    }

  switch(Math.floor(data * 100)){
    case 0:{
        showImage([])
        break;
    }

    case 3: {
      showImage([0])
      break;
    }
    case 5: {
      showImage([0,1])
      break;
    }
    case 8: {
      showImage([0,1,2])
      break;
    }

  }

  


  })
 




  return (
    <>
    
    <div className='w-full h-full  '>

    <div className='max-w-screen-xl mx-auto text-center relative'>
        <h1 className='text-[30vw] select-none text-white leading-none font-semibold tracking-tight'>
            worK
            
        </h1>

        <div className='w-full h-full  absolute  top-0'>
                {
                    image.map((item,index)=>(
                      item.isActive &&  <img key={index} className='w-52 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' src={item.url} style={{top:item.top, left:item.left}}/>
                    ))
                }
        </div>

    </div>

    </div>
    
    </>
  )
}

export default Home
