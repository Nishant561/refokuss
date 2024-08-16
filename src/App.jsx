
import { NavBar,Home ,Products ,Stripes,Marquees , Cards ,Footer} from './components'


import LocomotiveScroll from 'locomotive-scroll';







function App() {
  
  const scroll =  new LocomotiveScroll()


  

    

  return (
    <>
      <div className='w-screen   overflow-x-hidden font-["Satoshi Variable"] bg-black'>
              <NavBar/>
              <Home/>
              <Products />
              <Stripes/>
              <Marquees/>
              <Cards />
              <Footer/>
      </div>

      
    </>
  )
}

export default App
