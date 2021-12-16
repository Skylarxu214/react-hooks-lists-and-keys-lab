import React from "react";

function ProjectItem({ name, about, technologies }) {
const techs = technologies.map((technology,index)=>(
  <span key = {index}>{technology}</span>))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
       {techs}
      </div>
    </div>
  );



  
}

export default ProjectItem;
