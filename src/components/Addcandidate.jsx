import React, { useEffect, useState } from "react";

export default function Addcandidate() {

  const [candidates, setCandidates] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => 
  {
    fetch("/candidate")
    .then((res) => res.json())
    .then((data) => setCandidates(data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mr-5">
      <select
        className="border text-[10px]  font-medium  border-gray-300 p-2 rounded"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}  
      > 
        <option value="" className="text-[10px] font-medium">Select Candidate</option>
        {candidates.map((candidate) => (
          <option key={candidate.id} value={candidate.name}>
            {candidate.name}
          </option>
        ))}
      </select>
     </div>
  );
}
