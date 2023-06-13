import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Achievements
  
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar/>
          <Routes>
            
            <Route  exact path="/" element={<Hero />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/achievements" element={<Achievements />}></Route>
            
          </Routes>
          <Routes>
          {/* <Route  exact path="/" element={<Feedbacks />}></Route> */}
          <Route exact path="/about" element={<About />}></Route>
          </Routes>
          {/* <Tech/> */}
          <Contact />
          <Footer/>
        </div>
        
      </div>

    </Router>
  );
};

export default App;
