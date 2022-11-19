import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Technology from './Components/Technology/Technology';
import Destination from './Components/Destination/Destination';
import Crew from './Components/Crew/Crew';

function App() {
  return (
    <BrowserRouter>

    <div className="App">

    <Routes>
    <Route path="/">
    <Route index element={<Home/>} />
    <Route path="destination_page" element={<Destination/>} /> 
    <Route path="crew_page" element={<Crew/>} />
    <Route path="technology_page" element={<Technology/>} />
    </Route>
    </Routes>  

    </div>

    </BrowserRouter>
  );
}

export default App;
