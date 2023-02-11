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
  //left: 1,0625
  //right: 0.355
  
//ALL THIS WAS WRONG. IT IS NOT A LIGEBENET TRIANGLE!!!

  let sideL = 500 + .0;
  let katete = sideL * 0.707;

  let containerWidth = 2*katete + sideL;
  let containerHeight = 2*katete;
  // const {windowHeight, windowWidth} = useWindowDimensions()
  return (
    <div className='layout-container blue-theme' style={{ marginLeft: '2%', marginTop: '40%',
                                                          backgroundColor: 'purple', marginBottom: '30%',
                                                          width: containerWidth + 'px', height: containerHeight + 'px' }}>
      {/* <Triangle sideLength={sideL} rotation={135 left={0} top={0}  color='red'/> */}
      {/* <Triangle sideLength={sideL} rotation={225 left={triangleDist} top={0}  color='blue'/> */}
      {/* <Triangle sideLength={sideL} rotation={45 left={0} top={triangleDist}  color='green'/> */}
      {/* <Triangle sideLength={sideL} rotation={-45 left={triangleDist} top={triangleDist} color='yellow'/> */}
      {/* todo: undo */}

      <Triangle sideLength={sideL} rotation={0} left={sideL} top={0} color='gray' />

      <Triangle sideLength={sideL} rotation={135} left={1.0625*sideL} top={0.355*sideL} color='red' />
      <Triangle sideLength={sideL} rotation={225} left={2.385*sideL} top={1.0625*sideL} color='blue' />
      <Triangle sideLength={sideL} rotation={45} left={0.355*sideL} top={0.6775*sideL} color='green' />
      <Triangle sideLength={sideL} rotation={-45} left={1.6775*sideL} top={1.385*sideL} color='yellow' />
    </div>
  )
}