import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa6";
import { BiNotification } from "react-icons/bi"; 

const Navbar = () => {
  return (
    <>
      <div className="navmenu relative">
        <ul>
          <li className=' '> <FaUserCircle /> </li>
        </ul>
      </div>  
      <ul className="navmenu relative top-3">
          <li><BiNotification /> </li>
          <li><FaBriefcase /> </li>
          <li><FaUserFriends /> </li>
          <li><SlSettings /> </li>
      </ul>
      <ul className="navmenu absolute bottom-0">
          <li><FaRegCircleQuestion /> </li>
          <li><MdOutlineMessage /> </li>
          <li><CgMenuGridO /> </li>
      </ul>

    </>
    

  )
}

export default Navbar

 