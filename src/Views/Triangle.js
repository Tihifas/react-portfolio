import React from 'react'

export const Triangle = ({sideLength, rotation, left, top}) => {
  return (
    // var transformValue = 'rotate(' + rotation + ')';
    <div className='triangle' style={{
        borderTop: sideLength + ' solid #f00',
        borderLeft: sideLength + ' solid transparent',
        borderRight: sideLength + ' solid transparent',
        transform: 'rotate(' + rotation + ')', left: left, top: top}}> </div>
    /* border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #f00;*/
  )
}
