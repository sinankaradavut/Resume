import React from 'react'

import Intro from './intro/intro'
import SectionHeader from '../section-header/section-header'
import Skills from './skills/skills'

const About = () => {
  return (
    <section id="about" className="about">
        <SectionHeader title="About Me" isDownloadResume={true} />
        <Intro/>
        <Skills/>
    </section>
  )
}

export default About