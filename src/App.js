import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Header } from './Components/Header';
import { LinkBox } from './Components/LinkBox';

import { KoalaView } from './Views/Koala';

import koalaImg from './Images/DALL·E 2023-01-25 18.07.04 - Koala Programmer by Leonardo Da Vinci.png';
import guineaPigImg from './Images/DALL·E 2023-01-25 18.07.07 - Guinea pig having an existential crisis in a grocery store.png';
import uglyDucklingImg from './Images/DALL·E 2023-01-25 18.07.12 - An old school scifi book cover about the ugly duckling.png';
import slenderCruellaImg from './Images/DALL·E 2023-01-25 18.07.19 - The child of slenderman and Cruella de Vil, digital art.png';
import winnieSupperImg from './Images/DALL·E 2023-01-25 18.07.24 - The last supper painting by Leonardo with characters from winnie the pooh.png';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={
            <>
              <div className='app-container'>
                <Header />
                <div className='linkbox-container'>
                  <LinkBox link="/koala" heading={"Koala C. Martin"} img={koalaImg}/>
                  <LinkBox link="/link1" heading={"The Supermarked"} img={guineaPigImg}/>
                  <LinkBox link="/link1" heading={"Look Away"} img={uglyDucklingImg}/>
                  <LinkBox link="/link1" heading={"A Crime Against Nature"} img={slenderCruellaImg}/>
                  <LinkBox link="/link1" heading={"Who framed Winnie?"} img={winnieSupperImg}/>
                </div>
              </div>

            </>
          }
        />
        <Route path='/koala' element={<KoalaView />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
