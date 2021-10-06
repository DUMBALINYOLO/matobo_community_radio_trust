import React from 'react';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import AboutOne from './AboutOne';
import AboutTwo from './About';
import Banner from '../../components/LandingPage/Banner';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '30px',
  },
});


function TestimnonialsSections(props) {
  const { classes } = props;
  return (
    <Corporate>
      <div className={classes.root}>
          <AboutOne  />
          <AboutTwo  />
      </div>
    </ Corporate>
  );
}


export default withStyles(styles)(TestimnonialsSections);