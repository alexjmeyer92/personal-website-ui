import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ListItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactCard from '../Contact/ContactCard';
import Logo from '../../assets/Letters_Logo_Shadow.svg';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerButton: {
    margin: 0,
    position: 'absolute',
    right: 10,
    top: 5,
    color: 'black',
  },
}));

const Layout = props => {
  const { children } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav">
        <ListItemLink key="home" href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink key="resume" href="/resume">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItemLink>
        <ListItem button key="contact" onClick={handleOpen}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Me" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <AppBar position="fixed" color="default" elevation={0}> */}
      <AppBar
        position="fixed"
        style={{ backgroundColor: 'rgba(255,255,255,1)' }}
        elevation={0}
      >
        <Toolbar
          className="nav-bar"
          style={{ backgroundColor: 'rgba(255,255,255,1)' }}
        >
          <img
            src={Logo}
            alt="Personal logo"
            style={{ width: '100px', height: '50px' }}
          />
          <IconButton
            className={classes.drawerButton}
            aria-label="open top menu drawer"
            onClick={toggleDrawer('top', true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          {/* <Button onClick={toggleDrawer('top', true)}>Open Top</Button> */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <ContactCard handleClose={handleClose} />
            </Fade>
          </Modal>
          <Drawer
            anchor="top"
            open={state.top}
            onClose={toggleDrawer('top', false)}
          >
            {fullList('top')}
          </Drawer>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
