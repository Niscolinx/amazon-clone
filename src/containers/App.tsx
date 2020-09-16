import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from '../components/Header'
import Layout from './Layout'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='main'>
      <h2>Welcome to amazon clone</h2>

      <Switch>
        <Route path= '/' exact><h1>Home</h1></Route>
        <Route path= '/checkout'><h1>Checkout</h1></Route>
        <Route path= '/shop'><h1>Shop</h1></Route>
      </Switch>
      </div>

      <Layout/>
    </div>
  );
}

export default App;
