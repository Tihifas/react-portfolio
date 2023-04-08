import logo from './logo.svg';
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


function App() {
  let wTot = 300.0;
  
  let v = 60/360*2*Math.PI;
  let s = wTot/2;
  let kx = s*Math.cos(v);
  let ky = s*Math.sin(v);
  
  let hTot = 2*ky;

  let hRow2 = 0;

  return (
    <Router>
      <Routes>
        <Route path='/'
          element={
            <>
              <div className='app-container'>
                <div className='layout-hexagon-container' style={{width: wTot+'px', height: hTot+'px', margin: '50px'}} >
                  <div className='layout-hexagon-row-1' style={{
                    display: 'block',
                    width: '100%',
                    height: ky+'px'
                  }} >
                    <QuadrantTriangle quadrant={2} width={kx+'px'} height={'100%'} color={'blue'}/>
                    <div style={{
                      display: 'inline-block',
                      width: s + 'px',
                      height: '100%',
                      backgroundColor: 'blue'
                    }}></div>
                    <QuadrantTriangle quadrant={1} width={kx+'px'} height={'100%'} color={'blue'}/>
                  </div>
                  
                  <div className='layout-hexagon-row-2' style={{
                      display: 'block',
                      width: wTot+'px',
                      height: hRow2+'px',
                    }}>
                    <div style={{
                      display: 'inline-block',
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'blue'
                    }}></div>
                  </div>

                  <div className='layout-hexagon-row-3' style={{
                    display: 'block',
                    width: '100%',
                    height: ky+'px'
                  }} >
                    <QuadrantTriangle quadrant={3} width={kx+'px'} height={'100%'} color={'blue'}/>
                      <div style={{
                        display: 'inline-block',
                        width: s + 'px',
                        height: '100%',
                        backgroundColor: 'blue'
                      }}></div>
                      <QuadrantTriangle quadrant={4} width={kx+'px'} height={'100%'} color={'blue'}/>
                  </div>
                  {/* <Header />
                  <div className='linkbox-container'>
                    <LinkBox link="/koala" heading={"Koala C. Martin"} img={koalaImg} />
                    <LinkBox link="/link1" heading={"The Supermarked"} img={guineaPigImg} />
                    <LinkBox link="/link1" heading={"Look Away"} img={uglyDucklingImg} />
                    <LinkBox link="/link1" heading={"A Crime Against Nature"} img={slenderCruellaImg} />
                    <LinkBox link="/link1" heading={"Who framed Winnie?"} img={winnieSupperImg} />
                  </div> */}
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
