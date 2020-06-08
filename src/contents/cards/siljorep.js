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

const Siljorep = () => {
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
              ŠR
            </Avatar>
          }
          title={<h2>Šiljorep</h2>}
          subheader={<h6>Limodorum abortivum</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/siljorep.jpg"
          title="Šiljorep"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Na Fruškoj gori se krije i simpatični šiljorep (Limodorum
            abortivum), višegodišnja zeljasta biljka iz porodice kaćunki
            (Orchidaceae). Poreklo mu je iz srednje i istočne Evrope, zapadne
            Azije i Mediterana.{' '}
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
              Naraste od 20 do 50 cm u visinu, iz podanka koji je kratak i
              vodoravno položen, a uz njega razvija mesnato i lomljivo korenje.
              Plavoljubičaste je boje.{' '}
            </Typography>
            <Typography paragraph>
              Šiljorep je saprofit što znači da se hrani mrtvom organskom
              materijom te ne provodi fotosintezu.{' '}
            </Typography>
            <Typography>
              Raste u borovim i hrastovim šumama, šikarama, kamenjarima. Kao i
              sve druge vrste iz porodice kaćuna, spada u ugrožene i zaštićene
              biljke.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Siljorep;
