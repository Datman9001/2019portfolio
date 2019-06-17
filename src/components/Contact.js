import React, { Component } from 'react';
import contact from "./../img/svg/contact.svg"


export default class Contact extends Component {
    render() {
        return (
            <section class="contact">
            <div class="row">
               
               
                <div class="col-md-6 contact-section-1">
                   <img src={contact}alt=""/>
                </div>
               
                <div class="col-md-6 contact-section-2">
                    <h3 class="text-center">Contact Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas quos praesentium explicabo laboriosam, quibusdam unde quaerat nostrum dolorem provident necessitatibus blanditiis magnam enim. Incidunt quasi fugiat mollitia culpa cupiditate impedit nulla voluptates, sequi possimus numquam similique, enim quae nostrum? Temporibus libero recusandae culpa blanditiis debitis quas rem magnam, ipsam reiciendis quo eos inventore laborum?</p>
                  
                </div>
              
              </div>
        </section>
        )
    }
}
