import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const Mwindow = ({
  children,
  width = "40vw",
  height = "40vh",
  defaultPosition = { x: 300, y: 200 },
  windowName,
  setwindowState,
}) => {
  const [windowRect, setWindowRect] = useState({
    width,
    height,
    x: defaultPosition.x,
    y: defaultPosition.y,
  });
  const [restoreRect, setRestoreRect] = useState(null);
  const isMaximized = restoreRect !== null;

  const maximizeWindow = () => {
    if (isMaximized) return;

    setRestoreRect(windowRect);
    setWindowRect({
      width: "100vw",
      height: "100vh",
      x: 0,
      y: 0,
    });
  };

  const restoreWindow = () => {
    if (!restoreRect) return;

    setWindowRect(restoreRect);
    setRestoreRect(null);
  };

  return (
    <Rnd
      size={{ width: windowRect.width, height: windowRect.height }}
      position={{ x: windowRect.x, y: windowRect.y }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      onDragStop={(_, data) => {
        setWindowRect((currentRect) => ({
          ...currentRect,
          x: data.x,
          y: data.y,
        }));
      }}
      onResizeStop={(_, __, ref, ___, position) => {
        setWindowRect({
          width: ref.style.width,
          height: ref.style.height,
          x: position.x,
          y: position.y,
        });
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setwindowState((state) => ({ ...state, [windowName]: false }))
              }
            ></div>
            <div
              className={`dot yellow ${isMaximized ? "" : "disabled"}`}
              onClick={restoreWindow}
            ></div>
            <div className="dot green" onClick={maximizeWindow}></div>{" "}
          </div>
          <div className="title">
            <p>niravkandira - zsh </p>
          </div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Mwindow;
