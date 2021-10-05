import React, { Fragment, useEffect } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import svgImage15 from '../../assets/images/stock-logos/1.svg';
import svgImage16 from '../../assets/images/stock-logos/2.svg';
import svgImage17 from '../../assets/images/stock-logos/3.svg';
import svgImage18 from '../../assets/images/stock-logos/4.svg';
import svgImage19 from '../../assets/images/stock-logos/5.svg';
import svgImage20 from '../../assets/images/stock-logos/6.svg';
import AOS from "aos";
import 'aos/dist/aos.css';
import partner from './images/partners.jpg';

export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div data-aos="zoom-in-up">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12} lg={12}>
              <h1 style={{textAlign: 'center', color: '#145A73'}}>OUR PARTNERS</h1>
              <img
                src={partner}
                alt=""
                style={{width:'100%',}}

              />

            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
