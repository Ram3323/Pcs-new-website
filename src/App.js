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
import Header from '../src/components/hompage/header/header';
import About from '../src/components/hompage/about/about';
import Portfolio from '../src/components/hompage/portfolio/portfolio';
import logo from "../src/images/logohead-removebg-preview (1).png";
import Services from '../src/components/hompage/services/services';
import Contact from '../src/components/hompage/contactform/contact';
import Footer from '../src/components/hompage/footer/footer';

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
          <Routes>
            <Route exact path='/' element={<Header/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='' element={<Services/>} />
            <Route exact path='' element={<Contact/>} />
            <Route exact path='' element={<Footer/>} />


          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
