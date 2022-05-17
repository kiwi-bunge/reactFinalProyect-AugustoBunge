import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';




function App() {

  return (

    <BrowserRouter>

      <div className="App">

        <NavBar className="App-header" />      
        
        <Routes>
          
          <Route path="/" element = { <ItemListContainer /> } />
          
          <Route path="/cart" element = { <Cart /> } />

          <Route path="/category/:id" element = { <ItemListContainer /> } /> 

          <Route path="/detail/:detailId" element = { <ItemDetailContainer /> } />

          <Route path="/*" element= { <Navigate to="/" replace /> } />

        </Routes>

      </div>

    </BrowserRouter>
  );

}

export default App;
