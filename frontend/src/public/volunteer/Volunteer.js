import React, { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import svgImage10 from '../../assets/images/illustrations/projections.svg';
import Slider from 'react-slick';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'primary',
      paddingTop: '70px',
      paddingBottom: '0px',
    },
  });


function Volunteer(props) {
    const { classes } = props;

    useEffect(() =>{
        AOS.init({duration : 3000})

      }, []);


  return (
    <Corporate>
        <div className={classes.root} data-aos="zoom-in-up">
            <div className="feature-box py-3 py-xl-5">
                <Container className="py-3 py-xl-5">
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                    <div className="py-0 pb-5 py-xl-5">
                        <div className="pr-0 pr-xl-5">
                        <h1 style={{color: '#689F38', textAlign: 'center'}}>
                            VOLUNTEER WITH MATOBO COMMUNITY RADIO TRUST
                        </h1>
                        <p className="font-size-lg" style={{color: 'gold'}}>
                          Join our team and contribute positively to development of our community and the Matobo
                          Community Radio Trust by volunteering with us. Upcoming opportunities at Bayethe FM include
                          program production, radio presenters, news readers, ward news reporters, administration staff and
                          more other areas within our projects. Once brought on board, you will be given optimal training
                          where such is necessary in order to carry out your voluntary task. In some instances, the trust may
                          reimburse travelling and subsistence costs where such is considered necessary. This will be
                          highlighted prior to a volunteer taking up a task. Please complete this form and send us your details
                          highlighting your skills and experience if you have any.
                        </p>
                        </div>
                        <div className="d-block mt-4">
                        <Slider
                            slidesToShow={2}
                            slidesToScroll={2}
                            dots={true}
                            className="slick-slider slick-slider-left">
                            <div>
                            <div className="feature-box pr-4">
                                <h3 className="font-size-lg font-weight-bold my-3">
                                <h1 style={{color: '#689F38', textAlign: 'center'}}>
                                    Contributions
                                </h1>
                                </h3>
                                <p className=" mb-3" style={{color: 'gold'}}>
                                    It takes a Community to raise a child
                                </p>
                            </div>
                            </div>
                            <div>
                            <div className="feature-box pr-4">
                                <h1 style={{color: '#689F38', textAlign: 'center'}}>
                                    Skills
                                </h1>
                                <p className=" mb-3"style={{color: 'gold', textAlign: 'center'}}>
                                    You can Volunteer with any skill for all we need
                                    is your support
                                </p>
                            </div>
                            </div>
                            <div>
                            <div className="feature-box pr-4">
                            <h1 style={{color: '#689F38', textAlign: 'center'}}>
                                    Contributions
                                </h1>
                                <p className=" mb-3" style={{color: 'gold', textAlign: 'center'}}>
                                    Check about donations in the Donations Page
                                </p>
                            </div>
                            </div>
                            <div>
                            <div className="feature-box pr-4">
                                <h3 className="font-size-lg font-weight-bold my-3">
                                <h1 style={{color: '#689F38', textAlign: 'center'}}>
                                    Gratitude
                                </h1>
                                </h3>
                                <p className="mb-3" style={{color: 'gold', textAlign: 'center'}}>
                                    We are grateful for those who continue to volunteer with us
                                    may you continue to selflessly give us your hands as we
                                    take this journey
                                </p>
                            </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={12} lg={6} className="d-flex align-items-center">
                    <img alt="..." className="img-fluid" src={svgImage10} />
                    </Grid>
                </Grid>
                </Container>
            </div>
        </div>
    </Corporate>
  );
}


export default withStyles(styles)(Volunteer);
