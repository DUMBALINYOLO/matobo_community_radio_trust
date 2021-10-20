import React, { Fragment , useEffect} from 'react';

import { Grid, Container } from '@material-ui/core';

import svgImage5 from './mcrt.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css';

export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div className="feature-box py-5" data-aos="flip-left">
        <Container className="py-5">
          <Grid item xl={7} md={9} className="px-0">
            <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#689F38'}}>

            </h1>
            <p className="font-size-lg " style={{textAlign: 'center', color: 'gold'}}>

            </p>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={6} xl={4}>
              <div className="py-2 py-xl-5">
                <div className="d-block pl-0 pl-xl-3 mt-4">
                  <div className="feature-box mb-4 pr-4">
                    <h3 className="font-size-lg font-weight-bold my-3">
                    <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center', color: '#689F38'}}>
                    </h1>
                    </h3>
                    <p className=" mb-3" style={{textAlign: 'center', color: 'gold'}}>
                    </p>
                  </div>

                </div>
              </div>
            </Grid>

            <Grid
              item
              md={6}
              xl={8}
              className="d-flex pt-5 pt-xl-0 align-items-start align-items-xl-center">
              <img src={svgImage5} className="img-fluid" alt="..." />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
