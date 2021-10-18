import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import link from '../../api/ui/link';
import styles from './landingStyle-jss';
import bayethe from './bayethe.jpg';
import mcrt from './mcrt.jpg';
import mat from './mat.jpg';





function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <ParallaxProvider>
      <div className={classes.bannerParallaxWrap}>
        <Parallax
          offsetYMax={10}
          offsetYMin={-60}
          slowerScrollRate
          tag="figure"
        >
          <span className={classNames(classes.paralaxFull, classes.lineBanner1)} />
        </Parallax>
        <Parallax
          offsetYMax={15}
          offsetYMin={-50}
          slowerScrollRate
          tag="figure"
        >
          <span className={classNames(classes.paralaxFull, classes.lineBanner2)} />
        </Parallax>
        <Parallax
          offsetYMax={70}
          offsetYMin={-1}
          slowerScrollRate
          tag="figure"
        >
          <span className={classNames(classes.paralaxFull, classes.petalBanner1)} />
        </Parallax>
        <Parallax
          offsetYMax={60}
          offsetYMin={-30}
          slowerScrollRate
          tag="figure"
        >
          <span className={classNames(classes.paralaxFull, classes.petalBanner2)} />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Banner extends React.Component {
  render() {
    const { classes, gradient, slideMode } = this.props;
    return (
      <div
        className={
          classNames(
            classes.banner,
            gradient ? classes.gradient : classes.solid,
            slideMode ? classes.out : classes.fit
          )
        }
      >

        {!slideMode && <ParallaxDecoStyled />}
        <div className={!slideMode ? classes.container : ''}>
          <Typography style={{color: 'gold'}} component="h4" variant="h4" gutterBottom>WELCOME TO MATOBO COMMUNITY RADIO TRUST</Typography>
          <Typography style={{color: 'gold'}} component="p" variant="h5" gutterBottom>
            We are community-based organisation formed in 2020 whose major objective is to establishing
            and run a community radio station in Matobo, Mangwe and Brunapeg areas of Zimbabwe.
            We draw our membership mostly from our community. We welcome all organisations and
            individuals who abide by our constitution to be associate members.
            In September 2021, the Broadcasting Authority of Zimbabwe awarded a
            community broadcasting licence to us and we are now working to establish
            the envisioned radio station, Bayethe FM ‘The Voice from The Hills’
            Our radio programming will focus on issues promoting various areas of
            development for our community, issues affecting various groups, promoting our culture,
             local community and national news and entertaining our listeners.
             We are self-funded form our own projects run together with our communities.
             We are non-partisan and non-political.
          </Typography>


        </div>
      </div>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  gradient: PropTypes.bool.isRequired,
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};


const mapStateToProps = state => ({
  gradient: state.ui.gradient,
});

const BannerMaped = connect(
  mapStateToProps,
)(Banner);

export default (withStyles(styles)(BannerMaped));
