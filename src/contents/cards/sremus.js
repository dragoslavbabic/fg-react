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

const Sremus = () => {
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
              SR
            </Avatar>
          }
          title={<h2>Sremuš</h2>}
          subheader={<h6>Allium ursinum</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/sremus.jpg"
          title="Sremuš"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Na Fruškoj gori se može naći i sremuš (Allium ursinum), poznat još
            kao medveđi ili divlji beli luk. On pripada i prvim vesnicima
            proleća. Ova samonikla jestiva biljka bere se od marta do maja u
            planinskim područjima i izuzetno je korisna za zdravlje.
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
              Ima odlična antibakterijska svojstva i posebno je delotvorna u
              čišćenju creva, želuca i krvi. Medveđi luk sadrži alicin, eterična
              ulja, alisulfide i polisaharide.
            </Typography>
            <Typography paragraph>
              U sezoni od aprila do juna, koristi se samo mlado lišće i
              lukovica.{' '}
            </Typography>
            <Typography>
              Listovi mirišu na beli luk i veoma su blagog i laganog ukusa, dok
              njegova lukovica podseća na mešavinu belog i crnog luka i ljutog
              je ukusa. Cvetovi sremuša su beli, zvonastog oblika i jako
              prijatnog mirisa.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Sremus;
