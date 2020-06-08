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

const Petrovac = () => {
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
              PT
            </Avatar>
          }
          title={<h2>Petrovac</h2>}
          subheader={<h6>Agrimonia eupatoria</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/petrovac.jpg"
          title="Petrovac"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Na Fruškoj gori raste i petrovac ili ranjenik, lat. Agrimonia
            eupatoria, biljka iz porodice ruža lat. Rosaceae. Kao tipična
            taninska biljka upotrebljava se kod dijareje, unutrašnjih krvarenja
            i za ispiranje usta i grla.{' '}
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
              Osim toga dobra je i za smirivanje crevnih kolika, a pomaže i kod
              upale mokraćnih puteva. Poznat je i kao lek za kožna oboljenja,
              koristi se i za spoljašnju upotrebu za lakše zarastanje rana.{' '}
            </Typography>
            <Typography paragraph>
              Zeljasta trajnica, može narasti i do jednog metra visine. Ima
              karakteristične žute cvetiće sakupljene u klasolike grozdove, plod
              je mali čičak.{' '}
            </Typography>
            <Typography>
              Stabljika stoji vertikalno i ne grana se. Prizemni listovi
              formiraju rozetu, dok su ostali listovi na stabljici naizmenično
              perasti i blago nazubljeni po obodu. Cveta u periodu od juna do
              septembra.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Petrovac;
