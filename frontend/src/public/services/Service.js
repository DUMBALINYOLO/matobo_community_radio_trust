import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../containers/Templates/Operate';
import clsx from 'clsx';
import {
  Grid,

  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  IconButton,
  Checkbox,
  Divider


} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {
  getService,
  getImages,
  getProjects
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
    paddingTop: '30px',
    paddingLeft: '40px',
    paddingRight: '20px',
    paddingBottom: '20px',
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
    projects,
  } = props;
  const [value, setValue] = React.useState(0);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);


  useEffect(() => {
    if(!props.fetched) {
      props.getService(props.match.params.id);
      props.getImages(props.match.params.id);
      props.getProjects(props.match.params.id);
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
                      TUNNEL LIGHT
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
                      src={service.photo}
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
              <Tab label="PROJECTS" />
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
            <TabPanel value={value} index={2}>
              <Card className="card-box p-2 mb-4" data-aos="zoom-in-up">
                <div className="table-responsive">
                  <table className="table table-striped table-hover table-bordered text-nowrap mb-0">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center" style={{ width: '5%' }}></th>
                        <th>TITLE</th>
                        <th>DATE</th>
                        <th className="text-center" style={{ width: '20%' }}>
                          STATUS
                        </th>
                        <th>LOCATION</th>
                        <th className="text-center">URL LINK</th>
                      </tr>
                    </thead>
                    <tbody>
                      { projects.map((project) => {
                          return (
                            <tr data-aos="zoom-in-up" key={project.id}>
                              <td className="text-center" >
                                <Checkbox
                                  id="CustomCheckbox5"
                                  className="align-self-start"
                                />
                              </td>
                              <td>
                                <div className="d-flex align-items-center">

                                  <div>
                                    <span className=" d-block">
                                      {project.title}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="align-box-row text-danger">
                                  <div className="text-info ml-2 badge badge-neutral-info">
                                    {project.date}
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <div className="badge badge-success h-auto py-0 px-3">
                                  ONGOING
                                </div>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">

                                  <div>
                                    <span className=" d-block">
                                      {project.location}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                <IconButton size="small" color="primary">
                                  {project.url_link}
                                </IconButton>
                              </td>
                            </tr>
                            );
                          })
                      }
                    </tbody>
                  </table>
                </div>
                <Divider />
              </Card>
            </TabPanel>
          </Grid>
        </Grid>
        <div className="sidebar-inner-layout-overlay" />
      </div>
    </Corporate>
  );
};

const mapStateToProps = state =>({
  service: state.services.service,
  images: state.services.images,
  projects: state.services.projects,
})

const MappedServices = connect(
mapStateToProps,
{getService, getImages, getProjects} )
(Service);


export default withStyles(styles)(MappedServices);
