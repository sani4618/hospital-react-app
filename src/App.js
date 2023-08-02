import logo from './logo.svg';
import './App.css';
import AddHosp from './components/AddHosp';
import HospitalSearch from './components/HospitalSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/"exact element={<AddHosp/>}/>
      <Route path="/search" exact element={<HospitalSearch/>}/>

  


    </Routes>
    


    </BrowserRouter>
  );
}

export default App;
