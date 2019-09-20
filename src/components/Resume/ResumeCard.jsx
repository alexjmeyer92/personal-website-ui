import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GlobalContext from '../Context/GlobalContext';
import ResumeImage from '../../assets/night_sky.jpeg';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  cardInfo: {
    height: 50,
  },
});

const ResumeCard = props => {
  const classes = useStyles();

  const { cardText, cardValue } = props;

  // const loggerText = `I clicked the card action button from ${cardValue}`;

  const {
    values: contextValues,
    setValues: setContextValues,
  } = React.useContext(GlobalContext);

  return (
    <Card>
      <CardActionArea
        onClick={event => {
          event.preventDefault();
          setContextValues({
            ...contextValues,
            resumeSelection: cardValue,
          });
        }}
      >
        <CardMedia
          className={classes.media}
          image={ResumeImage}
          title="Resume Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardInfo}
          >
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResumeCard;
