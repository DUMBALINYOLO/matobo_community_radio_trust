import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  Grid, 
  Fab, 
  Badge, 
  Card,
  makeStyles,
  Paper,
} from '@material-ui/core';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';

import people1 from '../../assets/images/stock-photos/people-1.jpg';
import people2 from '../../assets/images/stock-photos/people-2.jpg';

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      backgroundColor: '#7420ff',
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))

export default function LivePreviewExample(props) {
  const classes = useStyles();


  return (
    <Paper className={classes.pageContent}>
      <Card className="card-box mb-4 p-5">
        <Grid container spacing={4} className="mb-4">
          <Grid item xs={12} md={6} lg={4}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="primary">
                    <FontAwesomeIcon icon={['fas', 'play-circle']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">Warning</div>
              </div>
              <img alt="..." className="card-img-top rounded" src={people1} />
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="font-size-xxl d-block my-4">
              Company Name : Tunnel Light Proprietary Limited 
            </a>
            <p className=" font-size-lg">
              Company Registration: BW00000530727 
              Vat Number: TBA 
              Date of Establishment: 12 June 2015 
              Legal Status: Proprietary Limited Company 
              Main Business:  Supply & Installation of Industrial Networking & 
                              Computing Solutions, IP Surveillance, Electrical & 
                              Instrumentation Equipment, Process Automation 
                              (PLC & SCADA), Energy Management, Electrical 
                              Power Systems Protection, Telemetry, Access 
                              Control and Industrial Weighing Systems 
                              Business Address: 452 Unit 8 
                              St Patrick Street 
                              Francistown, Botswana 
                              Postal Address: P O Box 10913 Tatitown, Francistown, Botswana 
                              Telephone +267 777 54590
            </p>
            <p className="text-black-50 font-size-lg mb-0">
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat
              volutpat.
            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                <div className="avatar-icon">
                  <img alt="..." src={avatar2} />
                </div>
              </div>
              <div>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold text-black"
                  title="...">
                  Shanelle Wynn
                </a>
                <span className="text-black-50 d-block">
                  Web Developer, Apple Inc.
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Fab color="primary">
                    <FontAwesomeIcon icon={['fas', 'play-circle']} />
                  </Fab>
                </div>
              </div>
              <div className="card-badges card-badgestop">
                <Badge color="secondary">New</Badge>
              </div>
              <img alt="..." className="card-img-top rounded" src={people2} />
            </a>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="font-size-xxl d-block my-4">
                Nature of Business
            </a>
            <p className=" font-size-lg mb-0">
              Tunnel Light Proprietary Limited is a System Integrator in the following fields: 
                - Supply & Installation of Industrial Ethernet & Wireless Networking Systems 
                - Industrial Computing Solutions 
                - Process Automation & Instrumentation Systems (PLC & SCADA) 
                - Energy Management & Renewable Energy Systems (Solar & Hydrogen) 
                - Electrical Power Systems Protection 
                - Electrical, Switchgear, MCCs, Drives & Motors 
                - Remote Automation and Telemetry 
                - Access Control & IP Surveillance Systems 
                - Industrial Weighing Systems 
                - Liquid & Gas Analytical Systems 

                We are in the business of implementing turnkey projects, supply and installation of new 
                equipment in the above stated categories.

            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
                <div className="avatar-icon">
                  <img alt="..." src={avatar3} />
                </div>
              </div>
              <div>
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="font-weight-bold text-black"
                  title="...">
                  Aaran Mitchell
                </a>
                <span className="text-black-50 d-block">
                  UI Engineer, Google
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
}
