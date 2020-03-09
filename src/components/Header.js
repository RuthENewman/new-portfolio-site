import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header id="header-colour">
    <div id="navBar" className="mdl-navigation">
      <NavLink id="link-navbar-0" className="mdl-navigation__link" to="/">Home</NavLink>
      <NavLink id="link-navbar-1" className="mdl-navigation__link" to="/about">About</NavLink>
      <NavLink id="link-navbar-2" className="mdl-navigation__link" to="/curriculumvitae">CV</NavLink>
      <NavLink id="link-navbar-3" className="mdl-navigation__link" to="/projects">Projects</NavLink>
      <NavLink id="link-navbar-4" className="mdl-navigation__link" to="/contact">Contact</NavLink>
    </div>
  </header>
);

export default Header;
