import React from "react";
import SectionHeader from "../section-header/section-header";
import Experience from "./experience";
import experiences from "./experiences.json";
import "./experiences.css"
const Experiences = () => {
  return (
    <section id="experience" className="resume">
      <SectionHeader title = "Experiences" isDownloadResume={false}/>

      <div className="row">
      {
        experiences.map((exp, i)=><div key={i} className="col-md-12 col-sm-12 col-xs-12">  
            <Experience  {...exp}/>
        </div>)
      }
        
      </div>
    </section>
  );
};

export default Experiences;
