import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

const Signup = () => {

    const [login,SetLogin] = useState(false);

  return (
    <>

     <button onClick={()=>(SetLogin(!login) )}><FaUserCircle  className='text-[25px] text-pink-800 ' /></button>

    { login &&
        (
            <div className='absolute top-12 z-10 '>
                <div className="py-1 bg-pink-200 w-full p-8 rounded-md shadow-md">
                    <ul className='useropen'>
                        <li> <a href='#'> Settings</a> </li>
                        <li> <a href='#'> Support </a> </li>
                        <li> <a href='#'> Signout </a> </li>
                    </ul>
                    
                    
                    
                </div>
            </div>
        )
    }
    </> 
  )
}

export default Signup