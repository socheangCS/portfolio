// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navigation from "./components/Nav";
// import LottieLoading from "./components/Loading";

// const Home = React.lazy(() => import("./pages/Home"));
// const Service = React.lazy(() => import("./pages/Service"));
// const About = React.lazy(() => import("./pages/About"));
// const Contact = React.lazy(() => import("./pages/Contact"));
// const Nullpage = React.lazy(() => import("./pages/404page"));

// function App() {
//   return (
//     <Router>
//       <div className="w-[100%] bg-bgcolor flex items-center justify-center flex-col mx-auto scroll-smooth">
//         <Navigation />

//         <Suspense fallback={<LottieLoading />}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/service" element={<Service />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<Nullpage />} />
//           </Routes>
//         </Suspense>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useRef } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Service = React.lazy(() => import("./pages/Service"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Navigation = React.lazy(() => import("./components/Nav"));

function App() {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navigation
        goToHome={() => scrollToSection(homeRef)}
        goToService={() => scrollToSection(serviceRef)}
        goToAbout={() => scrollToSection(aboutRef)}
        goToContact={() => scrollToSection(contactRef)}
      />
      <section ref={homeRef}>
        <Home contactRef={contactRef} />
      </section>
      <section ref={serviceRef}>
        <Service />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
