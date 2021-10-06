import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import logo from './mcrt.jpg';
import brand from '../../api/dummy/brand';
import link from '../../api/ui/link';

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

function Decoration(props) {
  const { classes } = props;
  return (
    <div>
      <svg fill="#fff" className={classes.footerDecoration}>
        <use xlinkHref="/images/decoration/petal5.svg#Petal-Bottom" />
      </svg>
    </div>
  );
}

Decoration.propTypes = {
  classes: PropTypes.object.isRequired,
};

const DecorationStyled = withStyles(styles)(Decoration);

class Footer extends React.Component {
  state = {
    menuList: [
      createData('feature', '#feature'),
      createData('showcase', '#showcase'),
      createData('testimonials', '#testi'),
      createData('technology', '#tech'),
      createData('our belief', '#pricing'),
      createData('contact', '#contact'),
    ]
  }

  render() {
    const { menuList } = this.state;
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <DecorationStyled />
        <div className={classes.container}>
          <div className={classes.spaceContainer}>
            <div className={classes.brand}>
              <img src={logo} alt={brand.name} />
                <span style={{color: '#689F38'}}>MATOBO COMMUNITY RADIO TRUST</span>
            </div>
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
                    to='/projects'
                  >
                    <span style={{color: '#689F38'}}>OUR PROJECTS</span>
                  </Button>
                  <Button
                    color="inherit"
                    className=" px-4 py-2 text-capitalize"
                    component={Link}
                    to='/projects'
                  >
                    <span style={{color: '#689F38'}}>VOLUNTEER</span>
                  </Button>
                  <Button
                    color="inherit"
                    className=" px-4 py-2 text-capitalize"
                    component={Link}
                    to='/volunteer'
                  >
                    <span style={{color: '#689F38'}}>CONTACT US</span>
                  </Button>
            </nav>
          </div>
        </div>
        <div className={classes.copyright}>
          <div className={classes.container}>
            <p>&copy; 2021 MATOBO COMMUNITY RADIO TRUST </p>
            <p>&copy; developed by @nkolowadumbalinyolo @flexiblemeasurement&controlsystems </p>
            <span>
              <IconButton color="primary" className={classes.button} href={link.twitter} target="_blank"><i className="ion-social-twitter" /></IconButton>
              <IconButton color="primary" className={classes.button} href={link.pinterest} target="_blank"><i className="ion-social-pinterest" /></IconButton>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
