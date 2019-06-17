 import React, { Component } from 'react';
 import logo from './../img/mypic.jpeg';
 
 export default class Header extends Component {
   render() {
     return (
       <header>
       <nav className="navbar navbar-expand-lg dark">
  <div className="container"> <a className="navbar-brand" href="#">
    <span>
        <i className="fas fa-ankh fa-3x"></i>
    </span> </a> <button className="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333"
      aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item "><a className="nav-link " href="#">About</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#">Work</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
      </ul>
    </div>
  </div>
</nav> 
<div className="bg-color">
  <div>
      <img src={logo} alt=""/>
  </div>
  <div className="bg-infomation">
     
      <h2 className="display-3">Tyronne Calvin</h2>
      <small>Web Developer</small>
  </div>
  </div>
  </header>
  
         
        
       
     )
   }
 }


 
 

