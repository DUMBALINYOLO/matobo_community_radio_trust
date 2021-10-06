import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../containers/Templates/Corporate';
import clsx from 'clsx';
import {
  Grid,

  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,


} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {
  getProject,
  getImages,

} from '../../actions/services';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AOS from "aos";
import 'aos/dist/aos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '70px',
    paddingLeft: '40px',
    paddingRight: '20px',
    paddingBottom: '0px',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Service = (props) => {
  const {
    classes,
    service,
    images,
  } = props;
  const [value, setValue] = React.useState(0);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);


  useEffect(() => {
    if(!props.fetched) {
      props.getImages(props.match.params.id);
      props.getProject(props.match.params.id);
    }
    console.log('mount it!');

  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate >
      <div className={classes.root} data-aos="zoom-in-up">
        <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
                <Card className="mb-4">
                  <div className="card-badges">
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      MATOBO COMMUNITY RADIO TRUST
                    </span>
                  </div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="image-title-overlay"
                    title="...">
                    <div className="image-title-overlay--bottom">
                      <h3 className="display-4 font-weight-bold m-0 text-white">
                        {service.name}
                      </h3>
                    </div>
                    <img
                      alt="..." className="card-img-top"
                      src={service.image}
                      style={{height: '400px'}}
                    />
                  </a>
                </Card>
              </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={12}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="DESCRIPTION" />
              <Tab label="IMAGES" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                <Grid item xs={12} lg={12}  data-aos="zoom-in-up">
                <Card className="mb-4">
                  <CardContent className="p-3">

                    <p className="card-text">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="app-inner-content-layout--main" style={{paddingTop: '20px'}}>
                <PerfectScrollbar>
                  <Grid container spacing={4} data-aos="zoom-in-up">
                    { images.map((image) => {
                      return (
                        <Grid item xs={12} lg={6} key ={image.id} data-aos="zoom-in-up">
                          <Card className="mb-4">
                            <div className="card-badges">
                              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                                {service.name}
                              </span>
                            </div>
                              <img
                                alt="..."
                                className="card-img-top"
                                src={image.photo}
                                style={{height: '500px'}}
                              />
                          </Card>
                        </Grid>
                        );
                        })
                      }
                  </Grid>
                </PerfectScrollbar>
              </div>
              <div
                onClick={toggleSidebarMenu2}
                className={clsx('sidebar-inner-layout-overlay', {
                  active: isSidebarMenuOpen2
                })}
              />

            </TabPanel>
            
          </Grid>
        </Grid>
        <div className="sidebar-inner-layout-overlay" />
      </div>
    </Corporate>
  );
};

const mapStateToProps = state =>({
  service: state.services.project,
  images: state.services.images,
  projects: state.services.projects,
})

const MappedServices = connect(
mapStateToProps,
{ getImages, getProject} )
(Service);


export default withStyles(styles)(MappedServices);
