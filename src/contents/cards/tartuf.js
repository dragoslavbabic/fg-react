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

const Tartuf = () => {
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
              BT
            </Avatar>
          }
          title={<h2>Beli tartuf</h2>}
          subheader={<h6>Tuber magnatum</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/tartuf.jpg"
          title="Beli tartuf"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Tartufi botanički spadaju u rod gljiva gomoljača (Tuber) čija se
            plodna tela nalaze ispod zemlje na dubini od 10 do 30 cm, zbog čega
            ih je teško pronaći u prirodi. U tu se svrhu koriste posebno
            izdresirani psi koji njuhom otkrivaju mesto gde se mogu pronaći
            zrele gljive.{' '}
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
              No bez obzira na opevanu i hvaljenu prošlost, tajna o njihovom
              rastu i načinu života održala se sve do 19. veka, kada je
              otkriveno da tartufi rastu isključivo u zajednici sa korenjem
              određenih vrsta drveća, od kojih se kao najbolji izdvajaju hrast
              kitnjak i lužnjak.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Tartuf;
