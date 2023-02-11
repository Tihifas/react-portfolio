import React from 'react'

export const Triangle = ({ sideLength, rotation, left, top, color }) => {
  let borderLengthArg = sideLength / 2 + 'px';
  let leftPx = left + 'px';
  let topPx = top + 'px';
  return (
    // var transformValue = 'rotate(' + rotation + ')';
    <div className='triangle' style={{
      position: 'absolute',
      width: 0,
      height: 0,
      borderTop: borderLengthArg + ' solid ' + color,
      borderLeft: borderLengthArg + ' solid transparent',
      borderRight: borderLengthArg + ' solid transparent',
      transform: 'rotate(' + rotation + ')', left: leftPx, top: topPx
    }}> </div>
    /* border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #f00;*/
  )
}
