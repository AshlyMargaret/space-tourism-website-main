import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import DestinationPage from './Components/Pages/DestinationPage';
import CrewPage from './Components/Pages/CrewPage';
import Technology from './Components/Pages/Technology';
import Destination from './Components/Destination/Destination';

function App() {
  return (
    <BrowserRouter>

    <div className="App">

    <Routes>
    <Route path="/">
    <Route index element={<Home/>} />
    <Route path="destination_page" element={<Destination/>} /> 
    <Route path="crew_page" element={<CrewPage/>} />
    <Route path="technology_page" element={<Technology/>} />
    </Route>
    </Routes>  

    </div>

    </BrowserRouter>
  );
}

export default App;
