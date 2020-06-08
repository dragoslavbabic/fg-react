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

const Pupavka = () => {
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
              ZP
            </Avatar>
          }
          title={<h2>Zelena pupavka</h2>}
          subheader={<h6>Amanita phalloides</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/pupavka.jpg"
          title="Zelena pupavka"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Zelena pupavka (lat. Amanita phalloides), najotrovnija gljiva koja
            naseljava Frušku Goru, a i celu teritoriju Srbije. Šešir ove opake
            gljive se javlja u raznim nijansama zelene boje, najčešće je
            maslinastozelene boje sa bledim rubom (klobuk može biti i žut i
            sasvim beo.{' '}
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
              Raste od proleća do kraja jeseni u šumama. Može se naći u blizini
              hrasta, jesena, graba i breze.{' '}
            </Typography>
            <Typography paragraph>
              Poznato je da samo 30 grama plodnog tela ove gljive ubije zdravog
              čoveka, a dokazano je da čak i pepeo ove gljive ima smrtonosan
              karakter!{' '}
            </Typography>
            <Typography>
              Ova gljiva sadrži otrove koji uništavaju jetru i ne mogu se
              uništiti ni izlaganjem velikim temperaturama, npr. kuvanjem, niti
              sušenjem.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Pupavka;
