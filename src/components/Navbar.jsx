import React from 'react'
import './navbar.scss'
import DateTime from './DateTime'

const Navbar = ({windowState, setwindowState}) => {
  return (
<nav>
    <div className="left">
        <div className="comp-icon">
            <img src="./navbar-icons/mac.svg" alt="" />
        </div>
        <div className="nav-item">
            <p>Nirav Kandira</p>
        </div>
        <div className="nav-item">
            <p>File</p>
        </div>
        <div className="nav-item">
            <p>Window</p>
        </div>
        <div className="nav-item">
            <button><p onClick={() => setwindowState({ ...windowState, cli: !windowState.cli })}>Terminal</p></button>
        </div>
        <div className="nav-item">
            <button><p><a href="https://github.com/MELLOxProg/" target="_blank" rel="noopener noreferrer">Github</a></p></button>
        </div>
    </div>
    <div className="right">
        <div className="nav-icon">
            <img src="/navbar-icons/wifi.svg" alt="" />
        </div>
             <div className="nav-item">
            <DateTime />
        </div>
    </div>
</nav>
  )
}

export default Navbar