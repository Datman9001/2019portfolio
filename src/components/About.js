import React, { Component } from 'react';
import about from './../img/svg/about.svg'

export default class About extends Component {
    render() {
        return (
            <section class="about">
    <div class="row">
       
       
        <div class="col-md-6 about-section-1">
           <img src={about} alt=""></img>
        </div>
       
        <div class="col-md-6 about-section-2">
          <h3 class="text-center">About Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente voluptate debitis quod maiores vitae consequatur, facilis, eveniet libero odit quibusdam nostrum doloribus, sit assumenda maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sapiente voluptate debitis quod maiores vitae consequatur, facilis, eveniet libero odit quibusdam nostrum doloribus, sit assumenda maxime.</p>
          
        </div>
      
      </div>
</section>
        )
    }
}
