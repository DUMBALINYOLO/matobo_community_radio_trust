import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../Sidebar/sidebar-jss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class SideNavMobile extends React.Component {
  render() {
    const {
      classes,
      closeDrawer
    } = this.props;



    return (
      <div className={classes.drawerInnerMobile}>
        <div className={classes.drawerHeader}>
          <div className={classes.brandBig}>

          </div>
        </div>
        <div className={classNames(classes.menuContainer, classes.landingNav, classes.rounded)}>
          <List className={classes.dense} component="nav">

              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/projects'
              >
                <span style={{color: '#689F38'}}>PROJECTS</span>
              </Button>

              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/memberships'
              >
                <span style={{color: '#689F38'}}>MEMBERSHIPS</span>
              </Button>
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/volunteer'
              >
                <span style={{color: '#689F38'}}>VOLUNTEER</span>
              </Button>

              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/contact-us'
              >
                <span style={{color: '#689F38'}}>CONTACT US</span>
              </Button>
          </List>
          
        </div>
      </div>
    );
  }
}

SideNavMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  menuList: PropTypes.array.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideNavMobile);
