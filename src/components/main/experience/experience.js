import React from "react";

const Experience = ({company, title, period, desc}) => {
  return (
    <div className="resume-item">
      <h2>{company}</h2>
      <span> {title} | {period}</span>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default Experience;
