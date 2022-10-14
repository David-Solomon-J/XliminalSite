import './App.css';
import Portfolio from "./Components/Portfolio";
import PageBody from "./Components/PageBody";
import Process from './Components/Process';
import Prices from './Components/Prices';
import Contact from './Components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";


library.add(fas)

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<PageBody/>}/>
            <Route path="/Portfolio" element = {<Portfolio/>}/>
            <Route path="/Process" element = {<Process/>}/>
            <Route path="/Prices" element = {<Prices/>}/>
            <Route path="/Contact" element = {<Contact/>}/>
        </Routes>
    </Router>
    // <div className="App">
    //     <NavBar/>
    //     <PageBody/>
        

    // </div>
  );
}

export default App;
