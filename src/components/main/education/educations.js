import React from "react";
import SectionHeader from "../section-header/section-header";
import Experience from "../experience/experience";
import educations from "./educations.json";
import Education from "./education";

const Educations = () => {
  return (
    <section id="education" className="resume">
      <SectionHeader title="Education" isDownloadResume={false} />

      <div className="row">
        {educations.map((ed, i) => (
          <div key={i} className="col-md-12 col-sm-12 col-xs-12">
            <Education {...ed} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educations;
