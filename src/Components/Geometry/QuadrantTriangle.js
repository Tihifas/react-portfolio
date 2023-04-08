import React from 'react'

const QuadrantTriangle = ({quadrant, width, height, color}) => {
  let clipPath = '';
    switch (quadrant){
        case 1:
            clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%)';
            break;
        case 2:
            clipPath = 'polygon(100% 0%, 0% 100%, 100% 100%)';
            break;
        case 3:
            clipPath = 'polygon(0% 0%, 100% 100%, 100% 0%)';
            break;
        case 4:
            clipPath = 'polygon(0% 0%, 0% 100%, 100% 0%)';
            break;
        default:
            throw new Error('quadrant has to be 1, 2, 3 or 4');
    }
    return (
    <div style={{
        width: width,
        height: height,
        backgroundColor: color,
        clipPath: clipPath,
        display: 'inline-block'
    }}></div>
  )
}

export default QuadrantTriangle