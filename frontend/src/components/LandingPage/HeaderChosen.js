import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scrollspy from 'react-scrollspy';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import logo from './mcrt.jpg';
import brand from '../../api/dummy/brand';
import SideNavMobile from './SideNavMobile';
import styles from './landingStyle-jss';



let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}


class Header extends React.Component {
  state = {
    open: false,
    menuList: [
      createData('feature', '#feature'),
      createData('showcase', '#showcase'),
      createData('testimonials', '#testimonials'),
      createData('technology', '#tech'),
      createData('our belief', '#pricing'),
      createData('contact', '#contact'),
    ]
  }

  toggleDrawerOpen = () => {
    this.setState({ open: true });
  }

  toggleDrawerClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { menuList, open } = this.state;
    const { classes, turnDarker, gradient } = this.props;
    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={this.toggleDrawerClose}
            onOpen={this.toggleDrawerOpen}
            open={open}
            anchor="left"
          >
            <SideNavMobile menuList={menuList} closeDrawer={this.toggleDrawerClose} />
          </SwipeableDrawer>
        </Hidden>
        <AppBar
          className={
            classNames(
              classes.header,
              turnDarker && classes.darker,
              gradient ? classes.gradient : classes.solid
            )
          }
        >
          <Hidden lgUp>
            <IconButton
              className={classes.menuButton}
              aria-label="Menu"
              onClick={this.toggleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.container}>
            <div className={classes.spaceContainer}>
              <NavLink to="/" className={classes.brand}>
                <img src={logo} alt={brand.name} />
                <span style={{color: '#689F38'}}>MATOBO COMMUNITY RADIO TRUST</span>
              </NavLink>
              <Hidden mdDown>
                <nav>
                  <Button
                    color="inherit"
                    className=" px-4 py-2 text-capitalize"
                    component={Link}
                    to='/about'
                  >
                    <span style={{color: '#689F38'}}>ABOUT US</span>
                  </Button>
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
                    to='/donations'
                  >
                    <span style={{color: '#689F38'}}>DONATIONS</span>
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
                  
                </nav>
              </Hidden>
            </div>
          </div>
        </AppBar>
      </Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  turnDarker: PropTypes.bool.isRequired,
  gradient: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  gradient: state.ui.gradient
});

const HeaderMaped = connect(
  mapStateToProps,
)(Header);

export default withStyles(styles)(HeaderMaped);
