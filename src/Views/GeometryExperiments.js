import React from 'react'
import { Triangle } from './Triangle'
import { useState, useEffect } from 'react';

// export default function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
//     useEffect(() => {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return windowDimensions;
//   }  

export const GeometryExperiments = () => {
  let sideL = 100;
    let triangleDist = (0.87+1)*sideL;
    let hexagonSideL = triangleDist;
    // const {windowHeight, windowWidth} = useWindowDimensions()
  return (
    <div className='layout-container blue-theme' style={{marginLeft: '10%', marginTop: '10%'}}>
        {/* <div className='triangle layout-border-element'></div> */}
        {/* <Triangle sideLength={hexagonSideL} rotation={'-45deg'} left={0} top={0}/>
        <Triangle sideLength={hexagonSideL} rotation={'45deg'} left={triangleDist} top={0}/>
        <Triangle sideLength={hexagonSideL} rotation={'225deg'} left={0} top={triangleDist}/>
        <Triangle sideLength={hexagonSideL} rotation={'135deg'} left={triangleDist} top={triangleDist}/> */}
        {/* <Triangle sideLength={hexagonSideL} rotation={'0deg'} left={triangleDist} top={triangleDist}/> */}
        {/* todo */}
        <Triangle sideLength={hexagonSideL} rotation={'0deg'} left={0} top={0} color='red'/>
        {/* <Triangle sideLength={hexagonSideL} rotation={'45deg'} left={0} top={0} color='blue'/>
        <Triangle sideLength={hexagonSideL} rotation={'225deg'} left={0} top={triangleDist} color='green'/>
        <Triangle sideLength={hexagonSideL} rotation={'135deg'} left={0} top={triangleDist} color='yellow'/> */}
    </div>
  )
}