import React from 'react';
import { Link } from 'react-router-dom';

const Bio = () => (
    <div id="cv-bio">
      <div id="cv-bio-title">
        <h3>Bio</h3>
      </div>
      <p>I am a Full Stack Web Developer working with React, Ruby on Rails and JavaScript.
      I worked in the international development/humanitarian aid sector prior to learning to code.
      Find my projects <Link to="/projects">here</Link> </p>
    </div>
  );

export default Bio;
