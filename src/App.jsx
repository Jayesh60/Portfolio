import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Routes>
            
            <Route  exact path="/" element={<Hero />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/works" element={<Works />}></Route>
            
          </Routes>
          <Routes>
          {/* <Route  exact path="/" element={<Feedbacks />}></Route> */}
          <Route exact path="/about" element={<About />}></Route>
          </Routes>
          {/* <Tech/> */}
          <Contact />
        </div>
        <Footer/>
      </div>

    </Router>
  );
};

export default App;
