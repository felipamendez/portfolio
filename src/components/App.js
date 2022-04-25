
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import Navbar from './Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume/>
        </Route>
        <Route exact path="/contact">
         <Contact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
