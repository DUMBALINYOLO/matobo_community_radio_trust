import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Fab,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
    display: 'flex',
  },
  tabs:{
    backgroundColor: 'grey',
  }
});


const Header = (props) => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div
        className="header-nav-wrapper header-nav-wrapper-lg px-4"


      >
        <div className="header-nav-logo">
          <div className="nav-logo">
            <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/'

              >
                <span style={{color: '#8C5148'}}>MATOBO COMMUNITY RADIO TRUST</span>
            </Button>

          </div>
        </div>

        <div className="header-nav-menu d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/about'
            >
              <span style={{color: '#8C5148'}}>ABOUT US</span>
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/newsletter'
            >
              <span style={{color: '#8C5148'}}>NEWSLETTER</span>
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/services'
            >
              <span style={{color: '#8C5148'}}>OUR PROJECTS</span>
            </Button>

          </div>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
          <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/contact-us'
            >
              <span style={{color: '#8C5148'}}>CONTACT US</span>
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <Fab
              onClick={toggleDrawer('right', true)}
              color="primary"
              size="medium">
              <MenuRoundedIcon />
            </Fab>
          </span>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          elevation={11}>
          <List className="py-0">
            <ListItem className="d-block py-2 px-3">
              <div className="d-flex w-100 justify-content-between navbar-light align-items-center">
                <div className="header-nav-logo justify-content-start">
                  <Button
                    to="/"
                    component={Link}
                    title="">
                    <span>HLETIPANG</span>
                  </Button>
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                component={Link}
                to='/about'
                className=" px-4 py-2 text-capitalize">
                ABOUT US
              </Button>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                  color="inherit"
                  className=" px-4 py-2 text-capitalize"
                  component={Link}
                  to='/services'
                >
                  OUR PROJECTS
              </Button>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/newsletter'
              >
                <span style={{color: '#8C5148'}}>NEWSLETTER</span>
              </Button>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                component={Link}
                to='/newsletter'
                className=" px-4 py-2 text-capitalize">
                OUR NEWSLETTER
              </Button>
            </ListItem>
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                component={Link}
                to='/contact-us'
                className=" px-4 py-2 text-capitalize">
                CONTACT US
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Header);
