import React from 'react'
import Logo from './assets/logo.jpg'
import { CiSearch } from "react-icons/ci";
 import { TiGift } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import {  MdKeyboardArrowRight, MdPublishedWithChanges, MdKeyboardArrowDown} from "react-icons/md";


import Addproduct from './components/Addcandidate.jsx';
import Signup from './components/Signup.jsx';

 

const Sectionone = () => {
  return (
    <>
    <div className='container-fluid flex bg-white items-center '>
        <div className="w-1/2 logo">
            <img className='align-middle' src={Logo} alt='Talent Csenter' title='Talent Csenter' />
        </div> 
         <div className="w-1/2">
            <div className="flex justify-end">
                <div className="flex place-self-center bg-white text-zinc-950 border border-white border-b-gray-400 mr-3">
                    <CiSearch className='flex place-self-center '    />
                <input  type="text" placeholder='search' value='' className='w-11/12  pl-8 text-left'  /> 
                </div>
                <button className='btn-primary flex place-self-center mr-4 '> <FiPlus  className='place-self-center mr-1' /> Add New </button>
                <TiGift className='mr-3 place-self-center text-[25px]'/>
                <Signup className='mr-3 place-self-center'/>
            </div>
         </div>
    </div>

    <div className="container-fluid breadcrumbs shadow-sm bg-slate-100 flex items-center">
        <div className="w-1/2 "> 
        <div className="title flex text-center items-center"> <IoBriefcaseOutline className='mr-2'/> Jobs <MdKeyboardArrowRight className='mr-2 ml-2'/> FullStack Engineer </div>
            
        </div>


        <div className="w-1/2 ">
             <div className="flex float-right"> 
                <Addproduct />
                <button className='btn-primary flex place-self-center mr-4 '> <MdPublishedWithChanges  className='place-self-center mr-1' /> Published <MdKeyboardArrowDown className=' text-[20px]' /></button>
             </div>
             
         </div>

    </div>


    </>
  )
}

export default Sectionone