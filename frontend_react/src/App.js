import React from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components'
import './App.scss'

const {REACT_APP__TAWK_PROPERTY_ID, REACT_APP__TAWK_WIDGET_ID} = process.env;

const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
      <TawkMessengerReact
        propertyId = {REACT_APP__TAWK_PROPERTY_ID}
        widgetId = {REACT_APP__TAWK_WIDGET_ID}
      />
    </div>
  )
}

export default App