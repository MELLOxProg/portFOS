import React from 'react'
import Mwindow from './Mwindow'
import './resume.scss'

const Resume = ({ windowName, setwindowState }) => {
  return (
    <Mwindow
      windowName={windowName}
      setwindowState={setwindowState}
      defaultPosition={{ x: 420, y: 130 }}
    >
   <div className="resume-window">
    <embed src="/resume.pdf" frameborder="0"></embed>
   </div>
    </Mwindow>
  )
}

export default Resume
