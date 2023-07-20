import React, { useEffect} from 'react'



export default function ImageMagnifier() {
    
  // const handleMouseEnter = (event) => {
  //   const image = event.target;
  //   image.style.transform = `scale(${magnifyScale})`;
  // };

  // const handleMouseLeave = (event) => {
  //   const image = event.target;
  //   image.style.transform = 'scale(1)';
  // };

  // const [isMagnified, setMagnified] = useState(false);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  // };

  // const handleMouseEnter = () => {
  //   setMagnified(true);
  // };

  // const handleMouseLeave = () => {
  //   setMagnified(false);
  // };

    // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // const imageRef = useRef(null);
    // const magnifierRef = useRef(null);
  
    // const handleMouseMove = (e) => {
    //   const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    //   const { clientX, clientY } = e;
  
    //   const x = ((clientX - left) / width) * 100;
    //   const y = ((clientY - top) / height) * 100;
  
    //   setCursorPosition({ x, y });
  
    //   const magnifier = magnifierRef.current;
    //   magnifier.style.backgroundPosition = `-${x * zoomFactor}% -${y * zoomFactor}%`;
    // };
  

    // const handleMouseMove = (e) => {
    //   const glass = magnifyGlassRef.current;
    //   const img = e.currentTarget;
    //   const posX = e.nativeEvent.offsetX;
    //   const posY = e.nativeEvent.offsetY;
    //   const ratio = 2; // Adjust the magnification ratio as needed
  
    //   const bgPosX = -posX * ratio;
    //   const bgPosY = -posY * ratio;
  
    //   glass.style.backgroundImage = `url('${img.src}')`;
    //   glass.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    //   glass.style.backgroundSize = `${img.width * ratio}px ${img.height * ratio}px`;
    // };

  return (
  <>
 {/* <div className="magnify-container" onMouseMove={handleMouseMove}>
      <img src={require("../imgs/basmati.png")} alt="Product" className="product-image" />
      <div ref={magnifyGlassRef} className="magnify-glass"></div>
    </div> */}
  {/* <div
      className="magnify-image-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={require("../imgs/basmati.png")}  className="magnify-image" />

      {isMagnified && (
        <div
          className="magnify-glass"
          style={{
            backgroundPosition: `-${cursorPosition.x * 2}px -${cursorPosition.y * 2}px`,
          }}
        />
      )}
    </div> */}
        {/* <div className="magnify-image-container">
      <img
        src={require("../imgs/basmati.png")}
        alt="Magnify Image"
        className="magnify-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div> */}

     {/* <div className="image-magnifier-container">
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
    </div> */}
  </>
  )
}
