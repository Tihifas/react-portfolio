import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Header } from './Components/Header';
import { LinkBox } from './Components/LinkBox';

import { KoalaView } from './Views/Koala';
import Layer2View from './Views/Layer2View';
import { UglyDucklingView } from './Views/UglyDucklingView.tsx';

import { GeometryExperiments } from './Views/GeometryExperiments';
import QuadrantTriangle from './Components/Geometry/QuadrantTriangle';
import HtmlHexagon from './Components/Geometry/HtmlHexagon';


function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let handleResizeWindow = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow)
  }, []);

  // let hexWidth = Math.min(windowWidth * 0.65, 1200);
  let hexWidth = windowWidth * 0.60;
  // let hexWidth = 800;
  let hRow2 = 0;

  let [hex1Layer, setHex1Layer] = useState(1)
  let [hex2Layer, setHex2Layer] = useState(2)
  let [hex3Layer, setHex3Layer] = useState(3)

  let [hex1StateClass, setHex1StateClass] = useState('html-hexagon-layer-1')
  let [hex2StateClass, setHex2StateClass] = useState('html-hexagon-layer-2')
  let [hex3StateClass, setHex3StateClass] = useState('html-hexagon-layer-3')

  useEffect(() => {
    setHex1StateClass(`html-hexagon-layer-${hex1Layer}`)
  }, [hex1Layer])
  useEffect(() => {
    setHex2StateClass(`html-hexagon-layer-${hex2Layer}`)
  }, [hex2Layer])
  useEffect(() => {
    setHex3StateClass(`html-hexagon-layer-${hex3Layer}`)
  }, [hex3Layer])

  let slantedPressed1 = () => {
    if (hex1Layer != 1) {
      setHex1Layer(1)
      setHex2Layer(old => Math.min(old + 1, 3))
      setHex3Layer(old => Math.min(old + 1, 3))
    }
  }
  let slantedPressed2 = () => {
    if (hex2Layer != 1) {
      setHex2Layer(1)
      setHex1Layer(old => Math.min(old + 1, 3))
      setHex3Layer(old => Math.min(old + 1, 3))
    }
  }
  let slantedPressed3 = () => {
    if (hex3Layer != 1) {
      setHex3Layer(1)
      setHex1Layer(old => Math.min(old + 1, 3))
      setHex2Layer(old => Math.min(old + 1, 3))
    }
  }
  // let hexShiftY = 10;
  // let hexShiftX = hexShiftY*4;
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={
            <>
              <div className='app-container'>
                <div className='layout-hexagon-container'>
                  <HtmlHexagon
                    backgroundColor={'#FD8A8A'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<KoalaView />} centeringMode='text-content' slantedHeading={<div className={'clickable-text'} onClick={slantedPressed3}>Back&nbsp;Gallery&nbsp;</div>}
                    extraClasses={`${hex3StateClass} ${'theme-3'}`} />
                  <HtmlHexagon
                    backgroundColor={'#F1F7B5'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<Layer2View />} centeringMode='text-content' slantedHeading={<div className={'clickable-text'} onClick={slantedPressed2}>Cool&nbsp;Stuff</div>}
                    extraClasses={`${hex2StateClass} ${'theme-2'}`} />
                  <HtmlHexagon
                    backgroundColor={'#A8D1D1'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<UglyDucklingView textParam={true} />} centeringMode='text-content' slantedHeading={<div className={'clickable-text'} onClick={slantedPressed1}>Front&nbsp;Page</div>}
                    extraClasses={`${hex1StateClass} ${'theme-1'}`} />
                </div>
              </div>
            </>
          }
        />
        <Route path='/koala' element={<KoalaView />}></Route>
        <Route path='/GeometryExperiments' element={<GeometryExperiments />}></Route>
      </Routes>
    </Router >
  );
}

export default App;
