import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./CustomCursor.css";

const CustomCursor = forwardRef((props, ref) => {
  const cursorRef = React.useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useImperativeHandle(ref, () => ({
    updatePosition: (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    },
    handleMouseOver: (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    }
  }));

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovered ? "hovered" : ""}`}
    />
  );
});

export default CustomCursor;
