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

const Gorocvet = () => {
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
              GC
            </Avatar>
          }
          title={<h2>Gorocvet</h2>}
          subheader={<h6>Adonis vernalis</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/gorocvet.jpg"
          title="Gorocvet"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Gorocvet (lat. Adonis vernalis) ili u narodu poznat još kao: zečji
            mak, gorocvat, gospina vlas je još jednu od retkih vrsta koja raste
            na Fruškoj gori. Višegodišnja je zeljasta biljka iz familije
            ljutića. Predstavlja ukras Deliblatske peščare i u Vojvodini je
            zaštićena od 1978. godine.
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
              Osim po lepoti ova biljka je dragocena i po lekovitosti i koristi
              se za proizvodnju lekova protiv srčanih oboljenja. Upravo zbog
              toga je znatno proređena.
            </Typography>
            <Typography paragraph>
              Gorocvet je ljutog, gorkog, neprijatnog ukusa i veoma otrovan, ali
              i lekovit.
            </Typography>
            <Typography>
              U homeopatiji se gorocvet koristi za lečenje hipertireoze, reume,
              zapaljenja pluća i angine pektoris. Zbog otrovnosti ne treba je k
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Gorocvet;
