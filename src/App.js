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
import Machines from './Components/Machines';
import Equipments from './Components/Equipments';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import RegisterHome from './Components/RegisterHome';
import Guardian from './Components/Guardian';
import Volunteer from './Components/Volunteer';
import Student from './Components/Student';
import School from './Components/School';
import ForgotPassword from './Components/ForgotPassword';
import Subscribe from './Components/Subscribe';
import Machine_View from './Components/Machine_View';
import Media_View from './Components/Media_View';
import MediaImg from './Components/MediaImg';
import Gallery from './Components/Gallery';
import MediaFilter from './Components/MediaFilter';
import TestVideo from './Components/TestVideo';
import EventDetails from './Components/EventDetails';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';


function App() {

  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');


  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(localStorage.getItem('language') || 'en');
    };

    window.addEventListener('storage', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);
  console.log('currentLanguage in app.js: ', currentLanguage);

  return (
    <div>

      <div className={currentLanguage === 'en' ? '' : 'ab'}
        style={{ direction: currentLanguage === 'en' ? 'ltr' : 'rtl', overflow: 'hidden' }}>

        {/* <div className="" style={{ direction: "ltr", overflow: "hidden" }}> */}
        <a href="#skipContent" className="skipLink">
          {t("skip")}
        </a>
        <div className="clearfix"></div>
        <div id="main-content">
          <div className="app-slider stickySocial">

            {/* <BrowserRouter basename='en'> */}
            <BrowserRouter basename={currentLanguage === 'ar' ? 'ar' : 'en'}>
              <Header />
              <Routes>
                <Route path='/home' element={<HomeNavbar />} />
                <Route path='/subscribe' element={<Subscribe />} />
                <Route path='/about' element={<About />} />
                <Route path='/activities' element={<Activity />} />
                <Route path='/media_center' element={<Media_Center />} />
                <Route path='/testvideo' element={<TestVideo />} />
                <Route path='/machines' element={<Machines />} />
                <Route path='/equipment' element={<Equipments />} />
                <Route path='/contact_us' element={<ContactUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register_home' element={<RegisterHome />} />
                <Route path='/guardian' element={<Guardian />} />
                <Route path='/school' element={<School />} />
                <Route path='/student' element={<Student />} />
                <Route path='/volunteer' element={<Volunteer />} />
                <Route path='/forgot_password' element={<ForgotPassword />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/media_filter/:id' element={<MediaFilter />} />
                {/* connecting pages using useParams */}
                <Route path='/event_details/:id' element={<EventDetails />} />
                <Route path='/media_view/:id' element={<Media_View />} />
                <Route path='/machine_view/:id' element={<Machine_View />} />
                <Route path='/media_img/:id' element={<MediaImg />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;


