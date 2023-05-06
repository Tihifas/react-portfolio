import React from 'react'
import QuadrantTriangle from './QuadrantTriangle';

const HtmlHexagon = ({width, hRow2, left, top, content, slantedHeading, extraClasses}) => {
    let wTot = width;

    let v = 60 / 360 * 2 * Math.PI;
    let s = wTot / 2;
    let kx = s * Math.cos(v);
    let ky = s * Math.sin(v);

    let marginGabFix = '-.7px'

    let hTot = 2 * ky;

    // let contentTop = -Math.min(ky*.75, 300);
    let contentDistFromTop = Math.min(ky*.40, 175);
    let contentTop = -ky + contentDistFromTop;

    return (
        <div className={`html-hexagon-container ${extraClasses}`} style={{ width: wTot + 'px', height: hTot + 'px', position: 'absolute', left: left+'px', top: top+'px', isolation: 'isolate', pointerEvents:'none'}} >
            <div className='html-hexagon-row-1' style={{
                display: 'block',
                width: '100%',
                height: ky + 'px'
            }} >
                <QuadrantTriangle quadrant={2} width={kx + 'px'} height={'100%'} cssClasses={'background-color-1'}/>
                <div className='background-color-1' style={{
                    display: 'inline-block',
                    width: s + 'px',
                    height: '100%',
                    position: 'relative',
                    marginLeft: marginGabFix,
                    marginRight: marginGabFix,
                }}>
                    <div className='html-hexagon-slanted-heading' style={{position:'absolute', top: '1%', left: '100%', transform: 'rotate(60deg)', transformOrigin: 'top left', zIndex: 11,  pointerEvents:'auto'}}>
                        {slantedHeading}
                        </div>
                </div>
                <QuadrantTriangle quadrant={1} width={kx + 'px'} height={'100%'} cssClasses={'background-color-1'} />
            </div>

            <div className='html-hexagon-row-2' style={{
                display: 'block',
                width: wTot + 'px',
                height: hRow2,
                position: 'relative',
                marginTop: marginGabFix
            }}>

                <div className='background-color-1' style={{
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                }}>
                    <div className='html-hexagon-content background-color-1' style={{ width: s, position: 'relative', margin: 'auto', top: contentTop+'px', pointerEvents: 'all' }}>
                        {content}
                    </div>
                </div>
            </div>

            <div className='html-hexagon-row-3' style={{
                display: 'block',
                width: '100%',
                height: ky + 'px'
            }} >
                <QuadrantTriangle quadrant={3} width={kx + 'px'} height={'100%'} cssClasses={'background-color-1'} />
                <div className='background-color-1' style={{
                    display: 'inline-block',
                    width: s + 'px',
                    height: '100%',
                    marginLeft: marginGabFix,
                    marginRight: marginGabFix
                }}></div>
                <QuadrantTriangle quadrant={4} width={kx + 'px'} height={'100%'} cssClasses={'background-color-1'} />
            </div>
        </div>
    )
}

export default HtmlHexagon;