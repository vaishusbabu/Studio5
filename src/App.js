import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
import './assets/css/index.css';
import './assets/css/materialize.min.css';
import './assets/css/slick.css';
import './assets/css/style.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeNavbar from './Components/HomeNavbar';
import About from './Components/About';
import Activity from './Components/Activity';
import Media_Center from './Components/Media_Center';



function App() {
  return (
    <div>
      <div className="clearfix"></div>
      <div id="main-content">
        <div className="app-slider stickySocial">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomeNavbar />} />
              <Route path='/home' element={<HomeNavbar />} />
              <Route path='/about' element={<About />} />
              <Route path='/activities' element={<Activity />} />
              <Route path='/media_center' element={<Media_Center />} />

            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
