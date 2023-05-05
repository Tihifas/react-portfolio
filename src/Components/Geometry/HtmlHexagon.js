import React from 'react'
import QuadrantTriangle from './QuadrantTriangle';

const HtmlHexagon = ({backgroundColor, width, hRow2, left, top, zIndex, content, slantedHeading}) => {
    let wTot = width;

    let v = 60 / 360 * 2 * Math.PI;
    let s = wTot / 2;
    let kx = s * Math.cos(v);
    let ky = s * Math.sin(v);

    let hTot = 2 * ky;

    let contentTop = -ky/2;

    return (
        <div className='html-hexagon-container' style={{ width: wTot + 'px', height: hTot + 'px', position: 'absolute', left: left+'px', top: top+'px', zIndex: zIndex, isolation: 'isolate', pointerEvents:'none'}} >
            <div className='html-hexagon-row-1' style={{
                display: 'block',
                width: '100%',
                height: ky + 'px'
            }} >
                <QuadrantTriangle quadrant={2} width={kx + 'px'} height={'100%'} color={backgroundColor} />
                <div style={{
                    display: 'inline-block',
                    width: s + 'px',
                    height: '100%',
                    backgroundColor: backgroundColor,
                    position: 'relative'
                }}>
                    <div className='html-hexagon-slanted-heading' style={{position:'absolute', top: '1%', left: '100%', transform: 'rotate(60deg)', transformOrigin: 'top left', zIndex: zIndex+1,  pointerEvents:'auto'}}>
                        {slantedHeading}
                        </div>
                </div>
                <QuadrantTriangle quadrant={1} width={kx + 'px'} height={'100%'} color={backgroundColor} />
            </div>

            <div className='html-hexagon-row-2' style={{
                display: 'block',
                width: wTot + 'px',
                height: hRow2,
                position: 'relative'
            }}>

                <div style={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    backgroundColor: backgroundColor
                }}>
                    <div style={{ width: s, position: 'relative', margin: 'auto', top: contentTop+'px' }}>
                        {content}
                    </div>
                </div>
            </div>

            <div className='html-hexagon-row-3' style={{
                display: 'block',
                width: '100%',
                height: ky + 'px'
            }} >
                <QuadrantTriangle quadrant={3} width={kx + 'px'} height={'100%'} color={backgroundColor} />
                <div style={{
                    display: 'inline-block',
                    width: s + 'px',
                    height: '100%',
                    backgroundColor: backgroundColor
                }}></div>
                <QuadrantTriangle quadrant={4} width={kx + 'px'} height={'100%'} color={backgroundColor} />
            </div>
        </div>
    )
}

export default HtmlHexagon;