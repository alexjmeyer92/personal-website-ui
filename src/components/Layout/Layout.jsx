import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavItem from './NavItem';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   button: {
//     position: 'absolute',
//     right: 15,
//     color: 'white',
//   },
// });

const Layout = props => {
  // const classes = useStyles();

  const { children } = props;
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar className="nav-bar">
          {/* <img src={LabsBanner} alt="Apollo Labs Banner" height="64px" /> */}
          <NavItem routeTo="/" text="Home" />
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;