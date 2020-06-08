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
              DM
            </Avatar>
          }
          title={<h2>Divlja mačka</h2>}
          subheader={<h6>Felis silvestris</h6>}
        />
        <CardMedia
          className={classes.media}
          image="/images/divlja-macka.jpg"
          title="Divlja mačka"
        />
        <CardContent className="card-tekst">
          <Typography variant="body2" color="textSecondary" component="p">
            U Fruškoj gori boravi i divlja mačka (lat. Felis silvestris), jedna
            od vrsta iz porodice mačaka. To je snažna životinja okrugle glave sa
            kratkom njuškom i ušima. Po svom opštem izgledu, divlja mačka je
            slična pitomoj mački. Telo joj je dugo i do 90 cm, rep do 45 cm, a
            visinu dostižu do 75 cm.{' '}
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
              Dlaka im je gusta, sive boje sa karakterističnim crnim poprečnim
              prugama i uzdužnom tamnom prugom po leđima.{' '}
            </Typography>
            <Typography paragraph>
              Grudi i trbuh su svetliji i jednolično obojeni. Rep je valjkasto
              odlakan, sa 8 crnih prstenova i crnim završetkom.
            </Typography>
            <Typography>
              Divlja mačka je vrlo osetljiva i plašljiva divljač sa odlično
              razvijenim sluhom, vidom i dodirom, a slabije razvijenim njuhom.
              Karakteristične su im kandže na prstima koje odlično koriste pri
              hvatanju plena i kretanju. Hodaju oprezno i gotovo nečujno, a
              skaču u dužinu i do 15 puta od dužine svog tela.{' '}
            </Typography>
          </CardContent>
        </Collapse>{' '}
      </Card>
    </div>
  );
};

export default Orao;
