import React from 'react'
import SectionHeader from '../section-header/section-header'
import testimonials from "./testimonials.json"
import Testimonial from './testimonial'
import "./testimonials.css"

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
        <SectionHeader title="Testimonials" isDownloadResume={false}/>
        <div className="testimonial-carousel">
            {
                testimonials.map( (testimonal, i)=> <Testimonial {...testimonal} key={i}/> )
            }
        </div>
    </section>
  )
}

export default Testimonials