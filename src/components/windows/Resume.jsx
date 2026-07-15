import React from 'react'
import Mwindow from './Mwindow'
import './resume.scss'

const Resume = () => {
  return (
    <Mwindow>
   <div className="resume-window">
    <embed src="/resume.pdf" frameborder="0"></embed>
   </div>
    </Mwindow>
  )
}

export default Resume