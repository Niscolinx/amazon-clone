import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Switch, Route} from 'react-router-dom'

import Header from '../components/Header/Header'
import Layout from './Layout'

function App(props: any) {
  return (
    <div className="app">
      <Header/>
      <div className='main'>
    
      </div>

      <Layout slides={props.images}/>
    </div>
  );
}

export default App;
