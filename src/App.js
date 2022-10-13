import './App.css';
import NavBar from "./Components/NavBar";
import PageBody from "./Components/PageBody";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

function App() {
  return (
    <div className="App">
        <NavBar/>
        <PageBody/>
        

    </div>
  );
}

export default App;
