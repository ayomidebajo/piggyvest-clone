import React, { Component } from 'react'
import './styles/layout.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' component={Home}/>
      </BrowserRouter>
    )
  }
}

export default App

