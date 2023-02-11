import React from 'react'

export const Triangle = ({sideLength, rotation, left, top, color}) => {
  // let borderLengthArg = sideLength / 2 + 'px';

  // alert(left)
  
  let borderLengthF = (sideLength + 0.0)/2; //I'm not sure why its half
  // let rotationRadians = (rotation + .0)/360*2*Math.PI;
  // alert(rotationRadians)
  // arrowPLeft, arrowPTop
  // let left = arrowPLeft - (sideLengthF * Math.cos(rotationRadians)) //According to chatGPT
  // let top = arrowPTop - (sideLengthF * Math.sin(rotationRadians))
  // let left = arrowPLeft - (sideLengthF/2 * Math.cos(rotationRadians))
  // let top = arrowPTop -   (sideLengthF/2 * Math.sin(rotationRadians))
  return (
    // var transformValue = 'rotate(' + rotation + ')';
    <div className='triangle' style={{
      position: 'absolute',
      width: 0,
      height: 0,
      borderBottom: borderLengthF + 'px solid ' + color,
      borderLeft: borderLengthF + 'px solid transparent',
      borderRight: borderLengthF + 'px solid transparent',
      transformOrigin: 'top left',
      transform: 'rotate(' + rotation + 'deg)',
      left: left + 'px',
      top: top + 'px'
    }}> </div>
    /* border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #f00;*/
  )
}
