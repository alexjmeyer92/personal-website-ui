import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ResumeImage from '../../assets/night_sky.jpeg';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  cardText: {
    height: 50,
  },
});

const ResumeCard = props => {
  const classes = useStyles();

  const { cardText } = props;

  return (
    <Card>
      <CardActionArea>
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
            className={classes.cardText}
          >
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResumeCard;
