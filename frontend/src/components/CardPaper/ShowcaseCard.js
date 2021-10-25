import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';

class ShowcaseCard extends React.Component {
  render() {
    const {
      classes,
      title,
      desc,
      action,
      image,
      landscape,
      date,
      noMargin,
      extraSize,
      href
    } = this.props;
    return (
      <Card style={{backgroundColor: '#0B5345'}} className={classNames(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
        <CardMedia
        >
        <img src={image} style={{height: '600px', width: '100%'}}/>
      </CardMedia>
        <CardContent>
          <h1 style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>{title}</h1>
          {date && (<Typography variant="caption" gutterBottom>{date}</Typography>)}
          <Typography style={{color: 'white', textAlign: 'center'}} variant="subtitle1">{desc}</Typography>
          {landscape && (
            <div className={classes.btnArea}>
              <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
            </div>
          )}
        </CardContent>

      </Card>
    );
  }
}


ShowcaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  date: PropTypes.string,
  href: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  date: undefined,
  noMargin: false,
  extraSize: false,
  href: '#'
};

export default withStyles(styles)(ShowcaseCard);
