import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NavItem from './NavItem';
import ContactCard from '../Contact/ContactCard';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

  return (
    <div>
      {/* <AppBar position="fixed" color="default" elevation={0}> */}
      <AppBar
        position="fixed"
        style={{ backgroundColor: 'rgba(255,255,255,0)' }}
      >
        <Toolbar
          className="nav-bar"
          style={{ backgroundColor: 'rgba(255,255,255,0)' }}
        >
          <NavItem routeTo="/" text="HOME" />
          <NavItem routeTo="/resume" text="RESUME" />
          <Button onClick={handleOpen} style={{ color: 'white' }}>
            Contact Me
          </Button>
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
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
