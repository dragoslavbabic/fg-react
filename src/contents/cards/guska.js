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

const Guska = () => {
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
              DG
            </Avatar>
          }
          title={<h2>Divlja Guska</h2>}
          subheader={<h6>Anser anser</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/divlja-guska.jpg"
          title="Orao Krstaš"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Na Fruškoj gori obitava i divlja guska (Anser anser), najveća siva
            guska porodice Anser. Ova vrsta je predak pripitomljene domaće guske
            u Evropi i Severnoj Americi. Guska je dugačka od 80 - 90 cm. Rep joj
            je veoma kratak i prema vrhu šiljat i bele boje.{' '}
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
              Raspon krila joj iznosi od 150 – 160 cm. Teška je oko 5 kg. Ženke
              su znatno krupnije i teže od mužjaka.
            </Typography>
            <Typography paragraph>
              Ovu pticu je lako indentifikovati u letu, po bledilu koje vodi do
              ivice krila.{' '}
            </Typography>
            <Typography>
              Divlja guska ima veliki broj prirodnih neprijatelja, a najčešći su
              lisice, kune, vidre i mnoge ptice grabljivice. Ona je nekoliko
              decenija trajno zaštićena vrsta divljači u Srbiji.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Guska;
