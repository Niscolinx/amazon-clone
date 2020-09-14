import React from 'react';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <h2>Welcome to amazon clone</h2>

      <Switch>
        <Route path= '/checkout'><h1>Checkout</h1></Route>
        <Route path= '/shop'><h1>Shop</h1></Route>
        <Route path= '/'><h1>Home</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
