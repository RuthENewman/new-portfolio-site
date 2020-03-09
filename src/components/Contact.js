import React, { Component } from 'react';
import Avatar from './myAvatarMini.png';


class Contact extends Component {
  render() {
    return (
      <div id="contact-body">
        <div id="contact-grid">
          <h2>Ruth Newman</h2>
          <img
            className="avatar-img"
            src={Avatar}
            alt="Avatar Pic"
            style={{paddingTop: "0.4em", height: "50%"}}
          />
          <div id="contact_info">
            <p>Contact me at
            <span> r</span>
            <span>u</span>
            <span>t</span>
            <span>h</span>
            <span>n</span>
            <span>e</span>
            <span>w</span>
            <span>m</span>
            <span>a</span>
            <span>n </span>
            <span>a</span>
            <span>t </span>
            <span>g</span>
            <span>m</span>
            <span>a</span>
            <span>i</span>
            <span>l </span>
            <span>d</span>
            <span>o</span>
            <span>t </span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            </p>
            <p>for professional enquires (general or related to freelance or contract work).</p>
            <p><a href="https://medium.com/@ruthnewman">Follow me on Medium</a> where I blog regularly.</p>

        </div>
        </div>
        </div>
    )
  }


}

export default Contact;
