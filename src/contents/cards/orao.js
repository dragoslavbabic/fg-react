import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Orao = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="col-md-3">
      <Card className=" slajd">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              OK
            </Avatar>
          }
          title={<h2>Orao Krstaš</h2>}
          subheader={<h6>Aquila heliaca</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/orao.jpg"
          title="Orao Krstaš"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Orao krstaš ili carski orao (lat. Aquila heliaca), jedan je od
            simbola Srbije i nalazi na našem grbu. Ime je dobio prema mestu gde
            su ove ptice nekada svijale svoja gnezda - na stoletnim hrastovima
            koji su na sebi imali krst i koje je naš narod smatrao za svetinju.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="tekst-expanded">
            <Typography paragraph>
              Ova impozantna grabljivica koja je nekada naseljavala široke
              predele Evroazije, danas je, pre svega zbog gubitka staništa, među
              ugroženim vrstama.{' '}
            </Typography>
            <Typography paragraph>
              Veoma je sličan surom, krstaš je nešto manji, dužine do 83 cm i
              raspona krila do 205 cm.{' '}
            </Typography>
            <Typography>
              Od 352 vrste ptica, koliko je do sada zabeleženo u Srbiji, orlova
              krstaša ima najmanje. Do prošle godine u Srbiji su bila samo dva
              para, jedan se nastanio i imao svoje gnezdo u Nacionalnom parku
              „Fruška gora“, a drugi u Specijalnom rezervatu prirode „Pašnjaci
              velike droplje“ u severnom Banatu, koji je pod stalnim nadzorom
              volontera.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Orao;
