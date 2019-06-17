import React, { Component } from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import '../src/css/style.css';
  

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    )
  }
}
