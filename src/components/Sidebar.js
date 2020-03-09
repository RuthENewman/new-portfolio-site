import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <aside className="mdc-drawer mdc-drawer--dismissable" id="sidebar-navigation" title={<Link style={{color: 'white'}}to="/">Menu</Link>}>
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
              <Link className="mdc-list-item mdc-list-item--activated" to="/" id="link-sidebar-0" aria-current="page">
                <span className="mdc-list-item__text">Home</span>
              </Link>
              <Link className="mdc-list-item" to="/about" id="link-sidebar-1">
                <span className="mdc-list-item__text">About</span>
              </Link>
              <Link className="mdc-list-item" to="/curriculumvitae" id="link-sidebar-2">
                <span className="mdc-list-item__text">Curriculum Vitae</span>
              </Link>
              <Link className="mdc-list-item" to="/projects" id="link-sidebar-3">
                <span className="mdc-list-item__text">Projects</span>
              </Link>
              <Link className="mdc-list-item" to="/contact" id="link-sidebar-4">
                <span className="mdc-list-item__text">Contact</span>
              </Link>
          </nav>
        </div>
      </aside>
    )
  }

}

export default Sidebar;
