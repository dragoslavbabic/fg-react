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
              ST
            </Avatar>
          }
          title={<h2>Stepski tvor</h2>}
          subheader={<h6>Mustela eversmanii</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/stepski-tvor.jpg"
          title="Stepski tvor"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Još jedna retka životinja koja potiče iz familije kuna, a naseljava
            Frušku goru je stepski tvor (lat. Mustela eversmanii). Prosečna
            dužina im je 45 cm, težina oko 2 kg i karakteristični su po
            svetlijem krznu. Sezona parenja im zavisi od vremenskih uslova, a
            ženka mlade nosi od 36, do 42 dana.
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
              Stepski tvorovi nemaju jasno definisane granice svoje teritorije,
              a uprkos svojoj veličini za jedan dan mogu preći i do 18
              kilometara.
            </Typography>
            <Typography paragraph>
              Ovaj mesojed je odličan lovac i obično se hrani gmizavcima i
              glodarima, poput miševa, veverica, mrmota, žaba, a plen mu može
              biti i živina, riba, kao i leševi životinja. Zimi se približava
              naseljima i nalazi sklonište u senu, štalama i živim ogradama.
            </Typography>
            <Typography>
              U nekim krajevima Evrope tvorovi su veoma cenjeni i korisni jer
              uništavaju štetočine. Postoji podatak da su pre 2,000 godina ljudi
              pripitomljavali tvorove i koristili ih za lov na zečeve. Stepski
              tvor u Srbiji spada u trajno zaštićenu vrstu životinja.
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Orao;
