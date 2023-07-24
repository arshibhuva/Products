import React, { useEffect, useRef, useState } from 'react'

export default function Cursor() {
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
    const [boxSize, setBoxSize] = useState();


    // const [position, setPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef();

    useEffect(() => {
         
        const handleMouseMove = (e,mouse) => {
            // const boudingsCard = e.getBoundingClientRect();
    //         const cardTop = boudingsCard.top;
    //         const cardLeft = boudingsCard.left;
    //   console.log(boudingsCard);
    // setPosition({ x: e.clientX  - e.target.offsetLeft, y: e.clientY  - e.target.offsetTop });
    setBoxPosition({ x: e.clientX, y: e.clientY});

    // const boudingsCard = e.getBoundingClientRect();
    // console.log(boudingsCard);
    // const cardTop = boudingsCard.top;
    // const cardLeft = boudingsCard.left;

    // const relativeX = mouse.pageX - cardLeft;
    // const relativeY = mouse.pageY - cardTop;

    // imgRef.current.style.top = relativeY * 1 + "px";
    // imgRef.current.style.left = relativeX * 1 + "px";

    setBoxSize({boxPosition}*2 + 'px');
    console.log(setBoxSize)
    console.log(imgRef.current.style.left)




            // var x = e.clientX - e.target.offsetLeft;
            // var y = e.clientY - e.target.offsetTop;

            // console.log('x ' +  x);
            // console.log('y ' + y);

        //    window.lens.style.Left = x + 'px';
        //    window.lens.style.Top = y + 'px';
// console.log( window.lens.style)

            // lens.Current
   
    // lens.style.top = y + 'px';
              };


// let lens = document.getElementById('les');
let first = document.getElementById('first');
// let second = document.getElementById('second');
// console.log(lens);
// console.log(first);
// console.log(second);

// first.addEventListener('mousemove',function(e){
    first.addEventListener('mousemove',handleMouseMove);
    // var x =e.clientX - e.target.offsetLeft;
    // var y =e.clientX - e.target.offsetTop;

    // lens.style.left = x + 'px';
    // lens.style.top = y + 'px';

        }, []);
      
    // const [firstImagePos, setFirstImagePos] = useState({ x: 0, y: 0 });
    // const [secondImagePos, setSecondImagePos] = useState({ x: 0, y: 0 });
    // const [isZoomed, setIsZoomed] = useState(false);
  
    // const handleMouseMove = (event, imageNumber) => {
    //   const { clientX, clientY } = event;
    //   const imagePosition = { x: clientX, y: clientY };
    //   if (imageNumber === 1) {
    //     setFirstImagePos(imagePosition);
    //   } else if (imageNumber === 2) {
    //     setSecondImagePos(imagePosition);
    //   }
    // };
  
    // const handleMouseEnter = () => {
    //   setIsZoomed(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setIsZoomed(false);
    // };
  return (
<>
{/* <div
        className={`image-box ${isZoomed ? "zoomed" : ""}`}
        style={{
          top: firstImagePos.y,
          left: firstImagePos.x,
        }}
        onMouseMove={(e) => handleMouseMove(e, 1)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://images.pexels.com/photos/12328370/pexels-photo-12328370.jpeg"
          alt="First Image"
          className="image"
        />
      </div>

      <div
        className={`image-box ${isZoomed ? "zoomed" : ""}`}
        style={{
          top: secondImagePos.y,
          left: secondImagePos.x,
        }}
        onMouseMove={(e) => handleMouseMove(e, 2)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="https://images.pexels.com/photos/12328370/pexels-photo-12328370.jpeg"
          alt="Second Image"
          className="image"
        />
      </div> */}
      <div className="main-box">
      <div   id="first" className='boxx'>
        <div id="lens" style={{
        position: 'absolute',
        top: boxPosition.y,
        left: boxPosition.x,
      }}></div>
      </div>
      <img id="second2" className='boxx' ref={imgRef}
       style={{width:{boxSize}}}
       src={require('../imgs/turmeric.jpeg')} alt="" />
      {/* <div ></div> */}
      </div>
</>
  )
}
