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
              EJ
            </Avatar>
          }
          title={<h2>Evropski jelen</h2>}
          subheader={<h6>Cervus elaphus hippelaphus</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/jelen.jpg"
          title="Evropski jelen"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Evropski jelen (lat. Cervus elaphus hippelaphus) jedan je od
            respektabilnijih stanovnika Fruške gore. Pripada porodici životinja
            iz reda papkara (lat. Artiodactyla) i jedna je od najvećih vrsta iz
            porodice jelena na svetu.
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
              Mužjaci (jeleni) su veći od ženki (košuta) i dostižu visinu
              175-250 cm i težinu od 160-240 kg, a ženke visinu 160-210 cm i
              težinu od 120-170 kg.
            </Typography>
            <Typography paragraph>
              Evropski jelen ima snažne noge i mišićavu građu tela, što mu
              omogućava dugo i istrajno trčanje, kao i hitar beg od opasnosti.
              Poseduje i kratak kitnjast rep.
            </Typography>
            <Typography>
              Zbog malog broja, u ograđenom delu lovišta „Nacionalni park Fruška
              gora" lov na jelene je zabranjen, izuzev sanitarnog odstrela, sve
              dok se brojno stanje divljači ne poveća i u potpunosti ne
              aklimatizuje na novu sredinu. Nakon toga, lov na evropskog jelena
              će se izvoditi isključivo sa visokih čeka.
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Orao;
