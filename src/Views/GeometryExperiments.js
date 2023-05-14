import React from 'react'
import { useState, useEffect } from 'react';
import QuadrantTriangle from '../Components/Geometry/QuadrantTriangle.tsx';
import winnieSupperImg from '../Images/DALL·E 2023-01-25 18.07.24 - The last supper painting by Leonardo with characters from winnie the pooh.png';


export const GeometryExperiments = () => {

  let sideL = 300 + .0;
  let katete = sideL * 0.707;

  let containerWidth = 2 * katete + sideL;
  let containerHeight = 2 * katete;
  // const {windowHeight, windowWidth} = useWindowDimensions()
  return (
    <div style={{ padding: '30px' }}>
      <div className='triangle-imgs-container' >
        <img src={winnieSupperImg} />
        <img src={winnieSupperImg} />
        <img src={winnieSupperImg} />
        <img src={winnieSupperImg} />
        <img src={winnieSupperImg} />
        <img src={winnieSupperImg} />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='hex-image-container'>
        <img src={winnieSupperImg} />
        <div className='hex-image-text'> The last honey</div>
      </div>
      <div className='layout-container blue-theme' style={{
        marginLeft: '2%', marginTop: '5%',
        backgroundColor: 'lightblue', marginBottom: '30%',
        width: containerWidth + 'px', height: containerHeight + 'px'
      }}>
        <QuadrantTriangle quadrant={2} color={'red'} width={'100px'} height={'100px'} />
        <QuadrantTriangle quadrant={1} color={'green'} width={'100px'} height={'100px'} />
        <br />
        <QuadrantTriangle quadrant={3} color={'blue'} width={'100px'} height={'100px'} />
        <QuadrantTriangle quadrant={4} color={'purple'} width={'100px'} height={'100px'} />
      </div>
    </div>
  )
}