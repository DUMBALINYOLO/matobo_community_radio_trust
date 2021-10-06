import React, { Fragment } from 'react';

import { Grid, Container, Button } from '@material-ui/core';

import mcrt from './bayethe.jpeg';



export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section">
        <Container className="pt-5">
          <h1 style={{color: '#689F38', textAlign: 'center'}}>OBJECTIVES</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={mcrt}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
              <h3 className="font-size-lg font-weight-bold my-3" style={{color: '#689F38'}}>INFORMATION ACCESS</h3>
                <p className="mb-3" style={{color: 'gold'}}>
                  To help our our community acces information
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span >Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={mcrt}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
              <h3 className="font-size-lg font-weight-bold my-3" style={{color: '#689F38'}}>
                  ENTERTAINMENT
                </h3>
                <p className=" mb-3" style={{color: 'gold'}}>
                  To Entertain our Communities
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature-box text-center mb-4">
                <img
                  src={mcrt}
                  className="w-25 mx-auto d-block img-fluid"
                  alt="..."
                />
              <h3 className="font-size-lg font-weight-bold my-3" style={{color: '#689F38'}}>DEVELOP</h3>
                <p className=" mb-3" style={{color: 'gold'}}>
                  To help our communities tackle their development goals
                </p>
                <Button color="primary" size="small" title="Learn more">
                  <span>Learn more</span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
