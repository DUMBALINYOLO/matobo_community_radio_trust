import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container } from '@material-ui/core';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="feature-section py-3">
        <Container className="pt-5">
        <h1 style={{color: '#689F38', textAlign: 'center'}}>AREAS OF INTEREST</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'thumbs-up']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: '#689F38'}}>NEWS</h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  EQUIPING OUR COMMUNITIES WITH ACCESS TO NEWS 
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                  <FontAwesomeIcon icon={['fas', 'gem']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: '#689F38'}}>
                  CULTURAL PROMOTION
                </h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  HELP IN THE CUSTODIANSHIP AND COMMUNICATION THROUGH
                  OUR CULTURE
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'eye']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: '#689F38'}}>ENTERTAINMENT</h3>
                <p className="mt-3" style={{color: 'gold'}}>
                  ENTERTAINING OUR LISTENERS
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="feature-box mb-4">
                <div className="font-size-xxl text-warning rounded-circle">
                    <FontAwesomeIcon icon={['fas', 'building']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-2" style={{color: '#689F38'}}>TALENT</h3>
                <p className=" mt-3" style={{color: 'gold'}}>
                  SHOWCASING LOCAL TALENT
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
