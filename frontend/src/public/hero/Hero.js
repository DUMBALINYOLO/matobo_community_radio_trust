import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';


import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import svgImage2 from '../../assets/images/illustrations/presentation-blocks.svg';

import hero6 from './mat.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function LivePreviewExample() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white" data-aos="zoom-in-up">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + hero6 + ')' }}
          />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-md-flex align-items-center">
                  <div className="text-black mt-3">
                    <h1 className="display-2 mb-3 font-weight-bold " style={{color: 'gold'}}>
                    </h1>

                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />
                    </div>

                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pt-5">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Card style={{backgroundColor: '#0B5345'}} className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-success mb-4 pb-4">
                  <CardContent className="p-3">
                    <h1 className="heading-1 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: 'teal'}}>
                      WELCOME TO MATOBO COMMUNITY RADIO TRUST
                    </h1>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: 'white'}}>
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

                    </p>
                  </CardContent>
                </Card>
              </Grid>


            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
