import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavItem from './NavItem';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar className="nav-bar">
          {/* <img src={LabsBanner} alt="Apollo Labs Banner" height="64px" /> */}
          <NavItem routeTo="/" text="Home" />
          <NavItem routeTo="/resume" text="Resume" />
          <NavItem routeTo="/contact" text="Contact" />
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
