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

const Roda = () => {
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
              CR
            </Avatar>
          }
          title={<h2>Crna Roda</h2>}
          subheader={<h6>Ciconia nigra</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/crna_roda.jpg"
          title="Crna Roda"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            U skrivenim delovima Fruške gore na visokim bukvama i starim
            hrastovima gnezde se i crne rode, koje se pojavljuju u aprilu. Crne
            rode (lat. Ciconia nigra) su zapravo pored belih roda jedine koje se
            gnezde u Evropi.<br></br>
            <br></br>
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
              I one su ptice selice, a neznatno su manje od belih roda. Njihova
              gnezda su usamljena i rode ih koriste nekoliko sezona zaredom. Ne
              smeju se uznemiravati, jer tada napuštaju gnezdo.
            </Typography>
            <Typography paragraph>
              Na jajima leže od 30 do 46 dana. Mladunci iz gnezda izleću u
              starosti od 55. do 71. dana.
            </Typography>
            <Typography>
              Crnim rodama pogoduju i močvare i poplavljena područja uz Dunav,
              gde pronalaze obilje hrane. Retko se viđaju jer su plašljive i
              klone se ljudi. Crne rode spadaju u ugrožene vrste ptica, a kod
              nas su strogo zaštićena vrsta.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Roda;
