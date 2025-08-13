import React, { useEffect, useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";




const Dashboarddata = () => {

    const [stages,setStages] = useState([]);
    useEffect(()=>
        {
            fetch("http://localhost:3000/stage")
            .then((res)=>res.json())
            .then((data)=>setStages(data))
            .catch(err=>(console.error(err)));
        },[]);

    const [candidates,setCandidates] = useState([]);
    useEffect(()=>
        {
            fetch("http://localhost:3000/candidate")
            .then((res) => res.json())
            .then((data) => setCandidates(data))
            .catch(err=>(console.error(err)))
        },[]);

const renderStars = (Dashboarddata)  =>
{
   return (
         <div className="flex space-x-1">
           {[...Array(5)].map((_, index) => (
             <FaRegStar  
               key={index}
               size={14}
               className={index < Dashboarddata ? "text-blue-900" : "text-gray-300"}
             />
           ))}
         </div>
       );
}; 
    return (
<>
    <div className='container-fluid'>
        <div className="flex">
            <div className="w-full "> 
                <div className='grid grid-cols-5 gap-4 '>
                    {stages.map(stage => (
                         <div key={stage.title}>
                            <div  className={`card-body stagecand w-full inline-flex place-items-center gap-2 bg-white p-2 rounded-sm border-l-4 mb-4  ${
                                                stage.title === "Open"
                                                ? "border-green-600"
                                                : stage.title === "Contacted"
                                                ? "border-blue-600"
                                                : stage.title === "Written Test"
                                                ? "border-yellow-500"
                                                : stage.title === "Technical Round"
                                                ? "border-red-500"
                                                : "border-gray-400"
                                            }`} > {stage.title} - {stage.count}</div>
                        <div className=''>
                            {candidates
                            .filter(c => c.stage === stage.title)
                            .map(candidate =>
                                    ( 
                                        <div className='shadow-sm mb-4' key={candidate.id}> 
                                            <div className="card ">
                                                <div className="card-body w-full gap-2 pb-5  bg-white p-2 rounded-md rounded-b-none" >
                                                    <h1 className="card-title font-bold text-[14px] text-blue-400  ">{candidate.name}</h1>
                                                    <h2 className="card-title text-[14px] truncate text-gray-400">{candidate.company}</h2>
                                                </div>
                                            </div>
                                            <div className='flex  bg-slate-100 p-2 rounded-md rounded-t-none '>
                                                <div className='flex float-left'> {renderStars(candidate.rating)}  </div>
                                                <div className='flex float-right'> <BsThreeDotsVertical /> </div>
                                                
                                                
                                                </div>
                                        </div> 
                                    ))
                                }
                        
                        </div> 
                       </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Dashboarddata