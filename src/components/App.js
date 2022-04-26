
import '../App.css';
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Navbar from './Navbar'
import Blog from "./Blog"
import { 
  Route, 
  Routes
 } from "react-router-dom"


function App() {

  return (
    <div className="App">
          <Navbar />
          <Routes>
              <Route path="about" element={<About />}/>
              
              <Route path="projects" element={<Projects/>}/>
              
              <Route path="resume" element={<Resume/>}/>
              
              <Route path="contact" element={<Contact/>}/>

              <Route path="blog" element={<Blog/>}/>

              <Route path="/" element={<Home/>}/>
          </Routes>
     
    </div>
  )
}

export default App;
