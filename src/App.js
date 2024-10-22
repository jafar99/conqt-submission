import './App.css';
import ItemDetails from './component/ItemDetails';
import Navbar from './component/Navbar';
import ShowData from './component/ShowData';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <ItemDetails/>

      <ShowData/>
        
    </div>
  );
}

export default App;
