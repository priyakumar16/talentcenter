import React, { useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const Dashboarddata = () => {
  const [stages, setStages] = useState([]);
  const [candidates, setCandidates] = useState([]);

  // Fetch stages
  useEffect(() => {
    fetch("https://talentcenter-new.vercel.app/stage.json")
      .then(res => res.json())
      .then(data => setStages(data.stage || data))
      .catch(err => console.error("Error fetching stages", err));
  }, []);

  // Fetch candidates
  useEffect(() => {
    fetch("https://talentcenter-new.vercel.app/candidate.json")
      .then(res => res.json())
      .then(data => setCandidates(data.candidate || data))
      .catch(err => console.error("Error fetching candidates", err));
  }, []);

  const renderStars = (rating) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <FaRegStar
          key={index}
          size={14}
          className={index < rating ? "text-blue-900" : "text-gray-300"}
        />
      ))}
    </div>
  );

  // Handle drag-and-drop
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceStage = source.droppableId;
    const destStage = destination.droppableId;

    if (sourceStage === destStage) {
      // Reorder in same stage
      const stageCandidates = candidates.filter(c => c.stage === sourceStage);
      const [moved] = stageCandidates.splice(source.index, 1);
      stageCandidates.splice(destination.index, 0, moved);

      const newCandidates = [
        ...candidates.filter(c => c.stage !== sourceStage),
        ...stageCandidates
      ];
      setCandidates(newCandidates);
    } else {
      // Move to another stage
      const newCandidates = candidates.map(c => {
        if (c.stage === sourceStage && candidates.filter(s => s.stage === sourceStage).indexOf(c) === source.index) {
          return { ...c, stage: destStage };
        }
        return c;
      });
      setCandidates(newCandidates);
    }
  };

  return (
    <div className="container-fluid">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-6 gap-4">
          {stages.map(stage => (
            <Droppable droppableId={stage.title} key={stage.title}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {/* Stage Header */}
                  <div
                    className={`card-body stagecand w-full inline-flex place-items-center gap-2 bg-white p-2 rounded-sm border-l-4 mb-4
                      ${stage.title === "Open"
                        ? "border-green-600"
                        : stage.title === "Contacted"
                        ? "border-blue-600"
                        : stage.title === "Written Test"
                        ? "border-yellow-500"
                        : stage.title === "Technical Round"
                        ? "border-red-500"
                        : "border-gray-400"
                      }`}
                  >
                    {stage.title} ({candidates.filter(c => c.stage === stage.title).length})
                  </div>

                  {/* Candidate List */}
                  {candidates
                    .filter(c => c.stage === stage.title)
                    .map((candidate, index) => (
                      <Draggable
                        key={candidate.id}
                        draggableId={candidate.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="shadow-sm mb-4"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="card">
                              <div className="card-body w-full gap-2 pb-5 bg-white p-2 rounded-md rounded-b-none">
                                <h1 className="card-title font-bold text-[14px] text-blue-400">
                                  {candidate.name}
                                </h1>
                                <h2 className="card-title text-[14px] truncate text-gray-400">
                                  {candidate.company}
                                </h2>
                              </div>
                            </div>
                            <div className="flex justify-between bg-slate-100 p-2 rounded-md rounded-t-none">
                              {renderStars(candidate.rating)}
                              <BsThreeDotsVertical />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboarddata;
