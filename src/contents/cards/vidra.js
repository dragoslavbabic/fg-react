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

const Vidra = () => {
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
              VI
            </Avatar>
          }
          title={<h2>Vidra</h2>}
          subheader={<h6>Lutra lutra</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/vidra-lutra.jpg"
          title="Vidra"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            Na Fruškoj gori živi i vidra, obična, rečna ili evropska (Lutra
            lutra). Pripada porodici kuna i izuzetno je prilagođena životu u
            slatkoj vodi. Poznata je kao veoma vešt i brz plivač. Vidre imaju
            gipko i vrlo pokretno telo, koje im je izuzetno osposobljeno za
            ronjenje.
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
              U vodi mogu izdržati izuzetno dugo, a za hvatanje plena se služe
              oštrim i snažnim zubima.
            </Typography>
            <Typography paragraph>
              Zanimljivi podatak je da se krik razbesnele vidre može na vodi
              čuti i dva kilometara daleko. Nekada su lovljene zbog svog krzna,
              koje se smatralo skupocenim, ali su ih ubijali i ribari da im ne
              bi činile konkurenciju.
            </Typography>
            <Typography>
              Vidra je ugrožena i strogo zaštićena vrsta u Srbiji, i svaki
              sačuvan ili spasen primerak je nemerljiv.
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Vidra;
