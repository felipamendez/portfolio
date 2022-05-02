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
              <Route path="portfolio/about" element={<About />}/>
              
              <Route path="portfolio/projects" element={<Projects/>}/>
              
              <Route path="portfolio/resume" element={<Resume/>}/>
              
              <Route path="portfolio/contact" element={<Contact/>}/>

              <Route path="portfolio/blog" element={<Blog/>}/>

              <Route path="portfolio/" element={<Home/>}/>
          </Routes>
     
    </div>
  )
}

export default App;
