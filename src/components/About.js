import React from 'react';
import NepalFlag from './nepalFlag.png';
import BangladeshFlag from './bangladeshFlag.png';
import UKFlag from './UKFlag.png';
import GermanyFlag from './germanyFlag.png';
import ColombiaFlag from './colombiaFlag.png';

const About = () => (
      <div className="about-page">
        <div className="page-heading">
        <h1>About Me</h1>
        </div>
        <div className="about-summary">
        <p>I am a Full Stack Web Developer specialising in 
          <span className="specialisation"> JavaScript</span>,
        <span className="specialisation"> React</span>,
        <span className="specialisation"> PHP</span>,
        <span className="specialisation"> and Ruby on Rails</span>.
        Additionally, I have experience with  <span className="specialisation">Continuous Integration</span>,
        <span className="specialisation"> Unit and Automated testing</span>, 
        <span className="specialisation"> REST APIs </span>,
        <span className="specialisation"> GraphQL </span>,
        <span className="specialisation"> jQuery</span>,
        <span className="specialisation"> HTML</span>,
        <span className="specialisation"> CSS / Sass </span> 
        and continue to learn more.
        </p>
        <p>Having worked internationally in the humanitarian
          and international development sectors for several years, I am experienced in working remotely and with teams with diverse backgrounds and contributions.</p>
        <p>Projects I designed, managed and monitored have ranged vastly in length and size.</p>
        <p>In additional to my technical skills, I am experienced in financial management, project management, proposal and report writing, and people management.
          </p>
          <p>I have a genuine passion for learning, which has spurred my decision to learn to code, but also includes learning multiple human(!) languages.</p>
          <p>I speak native English, advanced Spanish and German, and am also always trying to learn the Russian language.
        </p>
        <p>Countries worked/studied in:</p>
        </div>
        <div className="image-container-flags">
        <img src={NepalFlag} alt="Nepal"/>
        <img src={BangladeshFlag} alt="Bangladesh"/>
        <img src={UKFlag} alt="UK"/>
        <img src={GermanyFlag} alt="Germany"/>
        <img src={ColombiaFlag} alt="Colombia"/>
        </div>

      </div>
  );

export default About;
