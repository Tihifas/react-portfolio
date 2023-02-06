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
    let sideLength = '100px';
    // const {windowHeight, windowWidth} = useWindowDimensions()
    let hexagonSideL = window.innerHeight * 0.1 + 'px';
  return (
    <div className='layout-container blue-theme' style={{marginLeft: '30%', marginTop: '30%'}}>
        {/* <div className='triangle layout-border-element'></div> */}
        <Triangle sideLength={hexagonSideL} rotation={'-45deg'} left={'0px'} top={'0px'}/>
        <Triangle sideLength={hexagonSideL} rotation={'45deg'} left={'100px'} top={'0px'}/>
        <Triangle sideLength={hexagonSideL} rotation={'135deg'} left={'100px'} top={'100px'}/>
        <Triangle sideLength={hexagonSideL} rotation={'225deg'} left={'0px'} top={'100px'}/>

    </div>
  )
}