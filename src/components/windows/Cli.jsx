import React from 'react'
import Mwindow from './Mwindow'
import TerminalModule from "react-console-emulator";
import "./cli.scss"
const Terminal = typeof TerminalModule === "function" ? TerminalModule : TerminalModule?.default;

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
           fn: () => 'I am Nirav Kandira, a Full-Stack Web Developer specializing in the MERN stack and a B.Tech Computer Science & Engineering (Hons.) (AI/ML) graduate from Manipal University Jaipur.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Web Development: MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, Redux, React Router, Vite, Tailwind CSS, SCSS, GSAP, HTML, CSS
Database Management: SQL, MySQL, MongoDB, Redis
Programming Languages: JavaScript, TypeScript, Python
Core Concepts: OOPS, Data Structures & Algorithms, RESTful APIs, Authentication & Security (bcrypt)
Tools & Platforms: Git, GitHub
AI & Machine Learning (Theoretical): Machine Learning, Deep Learning, Principles of Artificial Intelligence (PAI)`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Cryptic Key - Password Manager - React.js, Node.js, MongoDB, Vite, Tailwind CSS
2. Moodify - Mood-Based Music Player - MERN Stack, MediaPipe FaceLandmarker, JWT, Redis, ImageKit
3. macOS-Style Interactive Portfolio - React, Vite, react-rnd, react-console-emulator
4. Discord Bot for Community Engagement & Automation - Node.js, discord.js`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `Web Developer Intern @ Kvon Tech Services Pvt. Ltd. (May 2025 - July 2025)
  - Developed and deployed web applications using the MERN stack
  - Optimized backend APIs and built responsive interfaces
  - Collaborated with cross-functional teams to deliver secure, client-ready features on deadline`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: niravkandira@yahoo.in
Phone: +91 9314011818
Location: Jaipur, Rajasthan, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/MELLOxProg', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: github.com/MELLOxProg
LinkedIn: linkedin.com/in/nirav-kandira-873732258`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }
    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝
Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.
Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch
Happy exploring! 🚀
`
    return (
        <Mwindow >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'niravkandira:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </Mwindow>
    )
}
export default Cli