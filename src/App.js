import logo from './logo.svg';
import { useState } from 'react';
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
  let [windowWidth, windowWidthEvent] = useState(window.innerWidth)
  let hexWidth = windowWidth * 0.7;

  // let hexWidth = 800;
  let hRow2 = 0;

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
                  content={<KoalaView />} slantedHeading={'Back\u00A0Gallery'}
                  stateClass={'html-hexagon-layer-3'}/>
                  <HtmlHexagon
                    backgroundColor={'lightGreen'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                    content={<KoalaView />} slantedHeading={<a href="https://www.wikipedia.org/">Cool&nbsp;Stuff</a>}
                    stateClass={'html-hexagon-layer-2'}/>
                <HtmlHexagon
                  backgroundColor={'lightSkyBlue'} width={hexWidth} hRow2={hRow2} left={0} top={0}
                  content={<KoalaView />} slantedHeading={<a href="https://www.wikipedia.org/">Front&nbsp;Page</a>}
                  stateClass={'html-hexagon-layer-1'}/>

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
