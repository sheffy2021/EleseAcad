import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import GraphicDetails from './pages/details/Graphics'
import VideoEditing from './pages/details/VideoEditing'
import PaymentFormPage from './pages/paymentForm'
import SigninPage from './pages/signin'



function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/graphic-details' component={GraphicDetails} exact />
        <Route path='/video-editing' component={VideoEditing} exact />
        <Route path='/payment-form' component={PaymentFormPage} exact />
      </Switch>
    </Router>
  )
}

export default App
