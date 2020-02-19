import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Grid } from '@material-ui/core';
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
        <br />
        <Grid
          container
          spacing={5}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
            <img
              style={{ height: '80px', width: '80px', padding: '15px' }}
              src={Construction1}
              alt="Construction Woker Logo"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <h2> Who Am I?</h2>
            <h2>
              {' '}
              I am a product leader with experience designing, building, and
              scaling products that solve the most complex problems at forture
              30 companies. I am excited by buidling high performing teams with
              diverse background and capabilities rooted in collaboration,
              domain expertise, and deep technical accumen.
            </h2>
            <h2>
              I also love bicycles, hiking, and chasing my 2 year old around the
              house
            </h2>
          </Grid>
          <Grid item xs={12} md={8}>
            <h2>
              {' '}
              Overview of my work and skills will go here. I will talk about the
              things I have built and the skills that I have.
            </h2>
            <h2>
              {' '}
              There will also be a button here linking to my resume / cv page.
              Additionally include a button to contact / work with me
            </h2>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              style={{ height: '80px', width: '80px', padding: '15px' }}
              src={Construction1}
              alt="Construction Woker Logo"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              style={{ height: '80px', width: '80px', padding: '15px' }}
              src={Construction1}
              alt="Construction Woker Logo"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <h2> Description of my blog section + links</h2>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
