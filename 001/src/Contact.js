import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="media">
        <div className="media-left media-middle">
          <a href="#">
            <img className="media-object" src="https://randomuser.me/api/portraits/med/men/85.jpg" alt="contact 85" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">Jerry Jennings</h4>
          <p><i className="fa fa-envelope-o"></i>jennings@gmail.com</p>
          <p><i className="fa fa-phone"></i>(999) 555-6767</p>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
        </div>
        <div className="group">
          <i className="fa fa-address-card-o"></i>
        </div>
      </div>
    );
  }
}

export default Contact;

// HTML comes from:
// http://getbootstrap.com/components/#media

// Avatar comes from: 
// https://randomuser.me/api/portraits/med/men/85.jpg
