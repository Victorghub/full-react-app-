import Nav from './Components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Landing from './Components/Landing';
import Highlights from './Components/Highlights';
import Featured from './Components/Featured';
import Discounted from './Components/Discounted';


function App() {
  return (
    <div className="App">
   <Nav />
   <Landing />
   <Highlights />
   <Featured />
   <Discounted />
    </div>
  );
}

export default App;
