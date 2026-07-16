import React from 'react'
import './dock.scss'


const Dock = ({ windowState, setwindowState }) => {
  return (
    <footer className='dock'>
        <div className="icon github" onClick={() => setwindowState({ ...windowState, github: !windowState.github })}> <img src="/dock-icons/github.svg" alt="" /></div>
        <div className="icon note" onClick={() => setwindowState({ ...windowState, note: !windowState.note })}> <img src="/dock-icons/note.svg" alt="" /></div>
        <div className="icon pdf" onClick={() => setwindowState({ ...windowState, resume: !windowState.resume })}> <img src="/dock-icons/pdf.svg" alt="" /></div>
        <div className="icon calendar" onClick={() => {window.open("https://calendar.google.com/calendar/","_blank")}}> <img src="/dock-icons/calendar.svg" alt="" /></div>
        <div className="icon spotify" onClick={() => setwindowState({ ...windowState, spotify: !windowState.spotify })}> <img src="/dock-icons/spotify.svg" alt="" /></div>
        <div className="icon mail" onClick={() => {window.open("mailto:niravkandira@yahoo.in","_blank")}}> <img src="/dock-icons/mail.svg" alt="" /></div>
        <div className="icon link" onClick={() => {window.open("https://www.linkedin.com/in/nirav-kandira-873732258/","_blank")}}> <img src="/dock-icons/link.svg" alt="" /></div>
        <div className="icon cli" onClick={() => setwindowState({ ...windowState, cli: !windowState.cli })}> <img src="/dock-icons/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock