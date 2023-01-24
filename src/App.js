import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { LinkBox } from './Components/LinkBox';
import { PortfolioItem } from './Components/PortfolioItem';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={
            <>
              <div className='app-container'>
                <Header />
                <LinkBox />
              </div>

            </>
          }
        />
        <Route path='/link1' element={<PortfolioItem />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
