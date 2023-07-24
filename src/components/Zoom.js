import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function Zoom() {
  const [mousePos, setMousePos] = useState(0);

    // const [mousePos, setMousePos] = useState(0);
    // const imgRef = useRef();
    // const cardRef = useRef();
    // const determinePos = useCallback(
    //     (ele, mouse) => {
    //       console.log(mouse)
    //       const boudingsCard = ele.getBoundingClientRect();
    //       const cardTop = boudingsCard.top;
    //       const cardLeft = boudingsCard.left;
    
    //       const relativeX = mouse.pageX - cardLeft;
    //       const relativeY = mouse.pageY - cardTop;
    
    //       imgRef.current.style.top = -relativeY * 1 + "px";
    //       imgRef.current.style.left = -relativeX * 1 + "px";
        
    
    
    //     },
    //     [mousePos]
    //   );
    //   useEffect(() => {
    //     if (cardRef.current) {
    //       determinePos(cardRef.current, mousePos);
    //     }
    //   }, [imgRef, mousePos, cardRef]);
    //   const handleMouseLeave = () => {
    //     imgRef.current.style.top = 0;
    //     imgRef.current.style.left = 0;
    //   };

    // ============================================
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setBoxPosition({ x: e.clientX, y: e.clientY });
      console.log(e.clientX);
      // console.log(e.target.offsetLeft);
      console.log(e.x);


      // console.log(setBoxPosition);
    };
  
    useEffect(() => {
      // Add event listener on mount to track mouse movement
      window.addEventListener('mousemove', handleMouseMove);
  
      // Remove event listener on unmount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    
    const imgRef = useRef();
    // const cardRef = useRef();
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
      // imgRef.current.style.top = 0;
      // imgRef.current.style.left = 0;
    };
   







  //   const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);








    // =======================================================

// const lens = document.getElementById('les');
// const first = document.getElementById('first');
// const second = document.getElementById('second');
// first.addEventListener('mousemove',function(e){
//     var x =e.clientX - e.target.offsetLeft;
//     var y =e.clientX - e.target.offsetTop;

//     lens.style.left = x + 'px';
//     lens.style.top = y + 'px';


// })



  return (
   <>

{/* <div
      id="first" className='box'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > */}
      {/* {isHovering ? (
        <img id='second'
          src={require("../imgs/asset 24.jpeg")}
          alt="Zoomed In"
          style={{ width: '100%', height: '100%' }}
        />
      ) : null} */}
    {/* </div> */}








  {/* <div id="first" className='box'></div>; */}
   {/* <div style={{ left: position.x, top: position.y }}></div> */}
   <div
      id="first" className='boxx'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <div>
        {/* <span id="les"></span> */}
        <div id="les"
      style={{
        // width: '50px',
        // height: '50px',
        // background: 'rgba',
        position: 'absolute',
        top: boxPosition.y,
        left: boxPosition.x,
      }}
         />
    </div>
    {isHovering ? (
        <img id='second'
        className='boxx'
          src={require("../imgs/asset 24.jpeg")}
          alt="Zoomed In"
          style={{ width: '100%', height: '100%' }}
        />
      ) : null}
    {/* <div id="second" className='box'></div> */}
    </div>
   </>
  )
}
