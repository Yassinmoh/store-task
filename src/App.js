import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Categories from './components/Categories';
import Items from './components/Items';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Categories />}/>
          <Route path="/items/:category" element={<Items />}/>
        </Routes>
        {/* <Items /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
