import React, { useEffect, useState } from 'react';
import {
  Grid,
  Container,
  Card,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';
import mcrt from './mcrt.jpeg';
import AOS from "aos";
import 'aos/dist/aos.css';
import Donate from './Donate';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function LivePreviewExample(props) {
  const [seriesDialog, setSeriesDialog] = useState(false);

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
      setSeriesDialog(false);
  }



  return (
    <>
      <div className="feature-box py-5" data-aos="flip-left">
        <Container className="py-5">
          <Grid item xl={7} md={9} className="px-0">
            <h1 className="display-3 mb-3 font-weight-bold" style={{textAlign: 'center'}}>
              HELP US TO SURVIVE
            </h1>
            <p className="font-size-lg " style={{textAlign: 'center', }}>
              Our operations are financed by membership fees, income generating projects spread around Matobo.
              We also fund ourselves from partnerships with willing public and private organisations and donations.
              By making a donation, you are helping us to continue providing this essential service to our
              community.
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
                                    onClick={openNew}
                                    className="mx-auto d-flex align-items-center">
                                    DONATE
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
                            <Button className="p-button-success" label='DONATE' onClick={openNew}/>
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
    </>
  );
}
