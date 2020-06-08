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

const Caplja = () => {
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
              CČ
            </Avatar>
          }
          title={<h2>Crvena Čaplja</h2>}
          subheader={<h6>Ardea purpurea</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/crvena-caplja.jpg"
          title="Crvena Čaplja"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Stanovnik Fruške gore je i crvena čaplja (lat. Ardea purpurea),
            poznatija kao čaplja danguba, čaplja mrka, ili zmijar ptica. Dosta
            velika ptica, koja je visoka od 80-90 cm, a duga otprilike isto
            toliko. Teška je 0.5-1.3 kg, a raspon krila dostiže od 120-150 cm.{' '}
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
              Nešto je manja od sive čaplje, od koje se razlikuje po svom
              crvenkastosmeđem perju, i kod odraslih, tamnije sivim leđima. Ima
              uži žuti kljun, koji je kod odraslih svetliji za vreme sezone
              parenja. Purpurno-crvene nijanse na perju teško se vide s daljine,
              kada izgleda nešto tamnija od sive čaplje.
            </Typography>
            <Typography paragraph>
              Glava i vrat su uži i vijugaviji, a stopala veća. Hranu nalazi u
              plitkoj vodi i hrani se najčešće malim ribama, žabama, insektima,
              malim sisarima, gmizavcima i pticama.{' '}
            </Typography>
            <Typography>
              Oprezan je i vešt lovac koji nepomično čeka plen. Zauzima pozu za
              skrivanje kao ptica bukavac. Spor je letač, a dok leti vrat joj je
              uvučen i izgleda zmijoliko poprimajući oblik slova S.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Caplja;
