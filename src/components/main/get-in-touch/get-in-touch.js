import React from 'react'
import SectionHeader from '../section-header/section-header'
import ContactForm from './contact-form'
import "./get-in-touch.css"

const GetInTouch = () => {
  return (
    <section id="contact" className="contact">
        <SectionHeader title="Get in touch" isDownloadResume={false} />
        <ContactForm/>
    </section>

  )
}

export default GetInTouch