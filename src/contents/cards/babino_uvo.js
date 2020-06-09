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

const BabinoUvo = () => {
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
              BU
            </Avatar>
          }
          title={<h2>Babino uvo</h2>}
          subheader={<h6>Sarcoscypha coccinea</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/babino-uvo.jpg"
          title="Babino uvo"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Interesantna gljiva koje se susreće na Fruškoj gori je svakako
            Babino uvo (lat. Sarcoscypha coccinea). Pojavljuje se krajem zime,
            odnosno početkom proleća, pa se za nju kaže da je gljivarski vesnik
            proleća. Jedna od najranijih vrsta, može se naći odmah posle
            topljenja snega, pa sve do kraja aprila.{' '}
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
              Zovu je „skarletnom peharastom gljivom” zbog specifičnog oblika
              njenog šešira, koji je između peharastog i tačkastog oblika.{' '}
            </Typography>
            <Typography paragraph>
              Drška ako je prisutna ona je zakržljala i ova gljiva je tankog
              tela. Pojavljuje se na mračnim mestima, mestima u senci.{' '}
            </Typography>
            <Typography>
              Uglavnom raste na trulim cepanicama tvrdog drveća, palim
              grančicama, a ponekad delovima drveća pojavljujući se na površini
              korenja kao kopnena gljiva.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default BabinoUvo;
