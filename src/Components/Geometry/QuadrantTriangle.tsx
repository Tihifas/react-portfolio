import React from 'react'

type QuadrantTriangleProps = {
    quadrant: 1 | 2 | 3 | 4,
    width: string,
    height: string,
    cssClasses: string
}

const QuadrantTriangle = ({quadrant, width, height, cssClasses}: QuadrantTriangleProps) => {
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
            throw new Error('quadrant parameter has to be 1, 2, 3 or 4');
    }
    return (
    <div className={cssClasses} style={{
        clipPath: clipPath,
        width: width,
        height: height,
        display: 'inline-block'
    }}></div>
  )
}

export default QuadrantTriangle