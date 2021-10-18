import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Card,

} from '@material-ui/core';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import {getDonations} from '../../actions/donations'
import AOS from "aos";
import 'aos/dist/aos.css';


const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'primary',
      paddingTop: '80px',
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '0px',
    },
  });



const Donations = (props) => {
    const { classes } = props;

    useEffect(() => {
        if(!props.fetched) {
            props.getDonations();
        }
        console.log('mount it!');

    }, []);

    useEffect(() =>{
        AOS.init({duration : 3000})

      }, []);

    return (
    <Corporate>
        <div className={classes.root} data-aos="zoom-in-up">
        <Card className="card-box mb-4">

            <div className="p-5">
                <h1
                    className="display-4 my-3 font-weight-bold"
                    style={{color: '#689F38', textAlign: 'center'}}
                >
                    MATOBO COMMUNITY RADIO TRUST DONATIONS
                </h1>
                <p
                    className="font-size-lg"
                    style={{color: 'gold'}}
                >
                  Our operations are financed by membership fees, income generating projects spread around Matobo.
                  We also fund ourselves from partnerships with willing public and private organisations and donations.
                  By making a donation, you are helping us to continue providing this essential service to our
                  community.

                </p>

                </div>
            </Card>

            <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
            >
                {
                    props.records.map((service) => {
                        return (
                        <Grid
                            item
                            xs={6}
                            key={service.id}
                        >
                            <Card className="card-box mb-4" data-aos="flip-up">

                                <div className="p-5">
                                <h1
                                    className="display-4 my-3 font-weight-bold"
                                    style={{color: '#689F38', textAlign: 'center'}}
                                >
                                    {service.platform_name}
                                </h1>
                                <p
                                    className="font-size-lg"
                                    style={{color: 'gold'}}
                                >
                                    {service.organization_link}
                                </p>
                                <h1
                                    className="display-4 my-3 font-weight-bold"
                                    style={{color: '#689F38', textAlign: 'center'}}
                                >
                                    OUR REQUEST
                                </h1>
                                <p
                                    className="font-size-sm mb-3"
                                    style={{color: 'gold'}}
                                >
                                    {service.donation_request_message}
                                </p>

                                </div>
                        </Card>
                    </Grid>
                    );
                  })
                }
              </Grid>
        </div>
    </Corporate>
    );
};



const mapStateToProps = state =>({
    records: state.donations.donations,
  })

const MappedServices = connect(
  mapStateToProps,
  {getDonations} )
  (Donations);

  export default withStyles(styles)(MappedServices);
