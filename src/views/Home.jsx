import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Button, Grid } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import CenterLogo from '../assets/Main_Logo.svg';
import ContactCard from '../components/Contact/ContactCard';
import Construction1 from '../assets/construction_1.svg';

const useStyles = makeStyles({
  mainLogo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
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
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.mainLogo}
      >
        <Grid item xs={12}>
          <img
            src={CenterLogo}
            style={{ width: '70vw' }}
            alt="Home Page Center Logo"
          />
        </Grid>
        <Grid item justify="space-between" xs={12}>
          <img
            style={{ height: '80px', width: '80px', padding: '15px' }}
            src={Construction1}
            alt="Construction Woker Logo"
          />
          <img
            style={{ height: '80px', width: '80px', padding: '15px' }}
            src={Construction1}
            alt="Construction Woker Logo"
          />
        </Grid>
        <Grid item xs={12}>
          <h2>
            Under Construction... Click contact me below if you are interested
            in my resume or working with me
          </h2>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
