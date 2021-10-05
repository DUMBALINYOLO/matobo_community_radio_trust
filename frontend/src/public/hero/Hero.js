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

                  <div className="text-black mt-3">
                    <h1 className="display-2 mb-3 font-weight-bold " style={{color: '#8C5148'}}>
                      WELCOME TO MATOBO COMMUNITY RADIO TRUST
                    </h1>

                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />
                    <div>
                      <Button
                        size="large"
                        variant="contained"
                        color="#8C5148"
                        className="mr-3">
                        <span className="btn-wrapper--label">
                          HOME FOR INNOVATION
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>

                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-md-flex align-items-center">

                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pt-5">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <CardContent className="p-3">
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#8C5148'}}>
                      WE TECHNOLOGIZE
                    </h3>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: 'green'}}>
                        We put good technology to use for efficient service delivery. With Hletipang
                        you are always guaranteed technology is always invested on to unpack
                        value for you

                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-4 pb-4">
                  <CardContent className="p-3">
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#8C5148'}}>
                      WE DELIVER
                    </h3>
                    <p className="card-text mb-3" style={{textAlign: 'center', color: 'green'}}>
                      We walk the talk. Offering the best when it comes to service delivery
                      is what we do best
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
