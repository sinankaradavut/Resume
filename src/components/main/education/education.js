import React from "react";

const Education = ({name, period, desc}) => {
  return (
    <div className="top-item resume-item">
      <h2>{name}</h2>
      <span>{period}</span>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default Education;
