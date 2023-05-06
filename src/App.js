import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Header } from './Components/Header';
import { LinkBox } from './Components/LinkBox';

import { KoalaView } from './Views/Koala';

import koalaImg from './Images/DALL·E 2023-01-25 18.07.04 - Koala Programmer by Leonardo Da Vinci.png';
import guineaPigImg from './Images/DALL·E 2023-01-25 18.07.07 - Guinea pig having an existential crisis in a grocery store.png';
import uglyDucklingImg from './Images/DALL·E 2023-01-25 18.07.12 - An old school scifi book cover about the ugly duckling.png';
import slenderCruellaImg from './Images/DALL·E 2023-01-25 18.07.19 - The child of slenderman and Cruella de Vil, digital art.png';
import winnieSupperImg from './Images/DALL·E 2023-01-25 18.07.24 - The last supper painting by Leonardo with characters from winnie the pooh.png';
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

  let hexWidth = windowWidth * 0.85;
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
  if(hex1Layer != 1){
    setHex1Layer(1)
    setHex2Layer(old => Math.min(old+1, 3))
    setHex3Layer(old => Math.min(old+1, 3))
  }
}
  let slantedPressed2 = () => {
    if(hex2Layer != 1){
      setHex2Layer(1)
      setHex1Layer(old => Math.min(old+1, 3))
      setHex3Layer(old => Math.min(old+1, 3))
    }
  }
  let slantedPressed3 = () => {
    if(hex3Layer != 1){
      setHex3Layer(1)
      setHex1Layer(old => Math.min(old+1, 3))
      setHex2Layer(old => Math.min(old+1, 3))
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
              <div className='app-container' style={{position: 'relative', margin: '15px'}}>
                <HtmlHexagon
                  backgroundColor={'lightCoral'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                  content={<KoalaView />} slantedHeading={<div className={'clickable-text'} onClick={slantedPressed3}>Back&nbsp;Gallery</div>}
                  stateClass={hex3StateClass}/>
                  <HtmlHexagon
                    backgroundColor={'lightGreen'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<KoalaView />} slantedHeading={<div className={'clickable-text'} onClick={slantedPressed2}>Cool&nbsp;Stuff</div>}
                    stateClass={hex2StateClass}/>
                  <HtmlHexagon
                    backgroundColor={'lightSkyBlue'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<KoalaView />} slantedHeading={<div className={'clickable-text'} onClick={slantedPressed1}>Front&nbsp;Page</div>}
                    stateClass={hex1StateClass}/>
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

{/* <Header />
                  <div className='linkbox-container'>
                    <LinkBox link="/koala" heading={"Koala C. Martin"} img={koalaImg} />
                    <LinkBox link="/link1" heading={"The Supermarked"} img={guineaPigImg} />
                    <LinkBox link="/link1" heading={"Look Away"} img={uglyDucklingImg} />
                    <LinkBox link="/link1" heading={"A Crime Against Nature"} img={slenderCruellaImg} />
                    <LinkBox link="/link1" heading={"Who framed Winnie?"} img={winnieSupperImg} />
                  </div> */}

export default App;
