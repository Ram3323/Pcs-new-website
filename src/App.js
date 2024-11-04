// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/header';
// import About from './components/about/about';
// import Portfolio from './components/portfolio/portfolio';

// function App() {
//   return (
//    <Router>
//     <Routes>

//   <Route exact path='/' element={<Header/>}/>
//   <Route exact path='' element={<About/>}/>
//   <Route exact path='' element={<Portfolio/>}/>

//     </Routes>
//    </Router>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/header';
// import About from './components/about/about';
// import Portfolio from './components/portfolio/portfolio';
// import logo from "../src/images/logohead-removebg-preview (1).png";

// const App = () => {
//   const [isSplashVisible, setIsSplashVisible] = useState(true);

//   // This effect will hide the splash screen after 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsSplashVisible(false);
//     }, 2000); // 2000 ms = 2 seconds
//     return () => clearTimeout(timer); // Cleanup the timer when component unmounts
//   }, []);

//   return (
//     <>
//       {isSplashVisible ? (
//         <div className="splash-screen">
//           {/* Logo moves from top to center */}
//           <img src={logo} alt="Logo" className="logo" />
//           {/* Text moves from top to center */}
//           <h1 className="splash-text text-[200px]">PCS</h1>
//         </div>
        
//       ) : (
//         <Router>
//           <Routes>
//             <Route exact path='/' element={<Header/>}/>
//             <Route exact path='/about' element={<About/>}/>
//             <Route exact path='/portfolio' element={<Portfolio/>}/>
//           </Routes>
//         </Router>
//       )}
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/hompage/header/header';
import logo from "../src/images/logohead-removebg-preview (1).png";
import Footer from './components/hompage/footer/footer';
import Main from './components/main/main';
import Aboutbanner from './components/about us/aboutbanner/aboutbanner';
import WebApp from './components/servicedetails/webapp';
import WebDesign from './components/servicedetails/webdesign';
import MobileApp from './components/servicedetails/mobileapp';
import Ecommerce from './components/servicedetails/ecommerce';
import SEO from './components/servicedetails/seo';
import WordPress from './components/servicedetails/wordpress';
const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // This effect will hide the splash screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000); // 2000 ms = 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {isSplashVisible ? (
        <div className="splash-screen">
          {/* Logo moves from top to center */}
          <img src={logo} alt="Logo" className="logo" />
          {/* Text moves from top to center */}
          <h1 className="splash-text text-[200px]">PCS</h1>
          {/* Dot loader */}
          <div className="dot-loader">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
          </div>
        </div>
      ) : (
        <Router>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='/aboutbanner' element={<Aboutbanner/>} />
            <Route exact path='/webapp' element={<WebApp/>} />
            <Route exact path='/webdesign' element={<WebDesign/>} />
            <Route exact path='/mobileapp' element={<MobileApp/>} />
            <Route exact path='/seo' element={<SEO/>} />
            <Route exact path='/ecommerce' element={<Ecommerce/>} />
            <Route exact path='/wordpress' element={<WordPress/>} />

          </Routes>
          <Footer/>
        </Router>
      )}
    </>
  );
};

export default App;
