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

const Smrci = () => {
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
              SM
            </Avatar>
          }
          title={<h2>Smrčci</h2>}
          subheader={<h6>Morchella</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/morcela.jpg"
          title="Morchella"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Smrčci (lat. Morchella) su rod jestivih i vrlo cenjenih gljiva koje
            rastu na Fruškoj gori. Ove neobične gljive imaju saćastu strukturu.
            Smrčci imaju mnoge narodne nazive, a i sami naziv roda Morchella
            potiče od reči „morchel“, što je u starom nemačkom jeziku značilo
            „gljiva“.{' '}
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
              Drveće često povezano sa smrčcima su javori, topole i stare
              jabuke. Rastu u proleće uglavnom u šumama.{' '}
            </Typography>
            <Typography paragraph>
              Na njihovo plodonošenje utiče veoma veliki broj različitih faktora
              te stoga spadaju u izuzetno nepredvidive gljive koje su sklone
              velikim eksplozijama, i tada se mogu brati u izobilju, dok se
              dešava da godinama možemo pronaći svega nekoliko primeraka.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Smrci;
