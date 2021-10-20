import React,  { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Container,
  Card,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';
import AOS from "aos";
import 'aos/dist/aos.css';
import {connect} from 'react-redux';
import Donate from './Donate';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import mcrt from './mcrt.jpg';


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'primary',
      paddingTop: '70px',
      paddingLeft: '1px',
      paddingRight: '1px',
      paddingBottom: '90px',
    },
  });


function Donations(props) {
    const { classes } = props;
    const [seriesDialog, setSeriesDialog] = useState(false);

    useEffect(() =>{
        AOS.init({duration : 3000})

      }, []);


      const openNew = () => {
        setSeriesDialog(true);
      }

      const hideDialog = () => {
          setSeriesDialog(false);
      }

  return (
    <Corporate>
      <div className={classes.root} data-aos="zoom-in-up">
        <div className="text-center my-5">
          <h1 style={{color: '#0B5345'}} className="display-4 mb-3 font-weight-bold" data-aos="flip-up">
            HELP US TO SURVIVE
          </h1>
          <p style={{color: 'gold'}} className="font-size-lg" data-aos="flip-up">
            Our operations are financed by membership fees, income generating projects spread around Matobo.
            We also fund ourselves from partnerships with willing public and private organisations and donations.
            By making a donation, you are helping us to continue providing this essential service to our
            community.
          </p>
        </div>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <Card className="card-box mb-4" data-aos="flip-left" style={{backgroundColor: '#0B5345'}}>
                <List className="py-0">
                  <ListItem className="d-block py-4">
                    <div className="align-box-column">
                      <div>
                        <Card className="card-transparent" data-aos="flip-right" >
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                  className="mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'play-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              src={mcrt}
                              className="card-img-top rounded img-fluid"
                              alt="..."
                            />
                          </a>
                        </Card>
                      </div>
                      <div>
                        <Dialog
                          visible={seriesDialog}
                          style={{ width: '600px' }}
                          modal
                          className="p-fluid"
                          onHide={hideDialog}
                          >
                              <Donate
                                  hardcopyDialog={setSeriesDialog}
                              />
                        </Dialog>
                        <div style={{padding: '20px'}}>
                          <Button className="p-button-warning" label='DONATE' onClick={openNew}/>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Corporate>
  );
}

const mapStateToProps = state =>({
    records: state.memberships.memberships,
  })

const MappedServices = connect(
  mapStateToProps,
  {} )
  (Donations);

export default withStyles(styles)(MappedServices);
