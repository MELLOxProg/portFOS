import React, { useEffect, useState } from "react";
import { useEffectEvent } from "react";
import Markdown from "react-markdown";
import Mwindow from "./Mwindow";
import "./note.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark  } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({ windowName, setwindowState }) => {
  const [markdown, setmarkdown] = useState(null);
  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setmarkdown(text));
  }, []);

 return (
        <Mwindow
          windowName={windowName}
          setwindowState={setwindowState}
          defaultPosition={{ x: 760, y: 90 }}
        >
            <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
        </Mwindow>
    )
};

export default Note;
