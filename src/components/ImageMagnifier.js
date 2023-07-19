import React, { useEffect, useRef, useState } from 'react'

export default function ImageMagnifier({ imageUrl, zoomFactor = 2 }) {
    



    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);
    const magnifierRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const { clientX, clientY } = e;
  
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
  
      setCursorPosition({ x, y });
  
      const magnifier = magnifierRef.current;
      magnifier.style.backgroundPosition = `-${x * zoomFactor}% -${y * zoomFactor}%`;
    };
  



  return (
  <>
     <div className="image-magnifier-container">
      <div
        className="image-magnifier"
        style={{ backgroundImage: `url(${imageUrl})` }}
        ref={imageRef}
        onMouseMove={handleMouseMove}
      />
      <div
        className="magnifier"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${100 * zoomFactor}% ${100 * zoomFactor}%`,
        }}
        ref={magnifierRef}
      />
    </div>
  </>
  )
}
