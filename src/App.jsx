import { useState } from 'react' 
import './App.css'
import Navbar from './Navbar'
import Sectionone from './Sectionone'
import Dashboarddata from './components/Dashboarddata'

function App() {
 
  return (
    <>
      <div className="talentcenter h-screen overflow-hidden">
         <div className="flex">
            <div className="w-14 h-screen primary place-items-center"><Navbar/></div>
            <div className="bg-slate-200 w-screen flex  flex-col">
              <>
                <div> <Sectionone /> </div>
                <div className='h-screen overflow-scroll'> <Dashboarddata /> </div> 
               </>
              </div>
           </div>
      </div>
    </>
  )
}

export default App
