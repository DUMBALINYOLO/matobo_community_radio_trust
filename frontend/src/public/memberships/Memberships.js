import React, { Fragment } from 'react';
import Corporate from '../../containers/Templates/Corporate';
import { Grid, Card, CardContent, Button } from '@material-ui/core';

import mcrt from './mcrt.jpg';
import stock2 from '../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../assets/images/stock-photos/stock-3.jpg';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import {connect} from 'react-redux';



const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: 'primary',
      paddingTop: '100px',
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '100px',
    },
  });




function Memberships(props) {
  const { classes } = props;

  return (
    <Corporate>
      <div className={classes.root} data-aos="zoom-in-up">
        <div className="text-center my-5" data-aos="flip-up">
          <h1 className="display-4 mb-3 font-weight-bold">
            WHY BE A MEMBER?
          </h1>
          <p  className="font-size-lg" >
            As a member of the trust, you contribute to the upliftment of our community by making vital
            decisions together with other members on the running and management of the trust and on
            programs broadcast on our radio station, Bayethe FM. You ensure that the goals set by the trust are
            achieved and more, you enforce accountability. At the end of every year, you will attend an annual
            general meeting to examine and improve operations of both the trust and the radio station. Our
            members also receive various ranging discounts retailers and service providers we currently have
            arrangements with on production of their membership cards.
          </p>
        </div>
        <div className="text-center my-5">
          <h1 className="display-4 mb-3 font-weight-bold" data-aos="flip-up">
            HOW TO BECOME A MEMBER?
          </h1>
          <p className="font-size-lg" >
            There are four tiers of membership, free, subscriber and associate. By choosing to become a
            member you agree to be bound by our constitution and statutes.
          </p>
        </div>
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: '#0B5345'}} className="mb-4" data-aos="flip-left" >
              <img alt="..." className="card-img-top" src={mcrt} />
              <CardContent className="p-3">
                <h2 className="card-title font-weight-bold font-size-lg" data-aos="flip-up" >
                  FREE MEMBERSHIP
                </h2>
                <p className="card-text"  >
                  This membership tier is open to all individuals over the age of 16 and resident in Matobo, Mangwe
                  and Brunapeg. Free members participate in all proceedings at our meeting and annual general
                  meetings but do not vote. A membership card is processed at a fee of $5. You can buy a Bayethe FM
                  branded t-shirt at a discounted price.
                </p>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{backgroundColor: '#0B5345'}} className="mb-4" data-aos="flip-left" >
              <img alt="..." className="card-img-top" src={mcrt} />
              <CardContent className="p-3">
                <h5  data-aos="flip-up" className="card-title font-weight-bold font-size-lg">
                  SUSCRIBER MEMBERSHIP
                </h5>
                <p className="card-text"   >
                  This membership tier is open to all individuals over the age of 16 and resident in Matobo, Mangwe
                  and Brunapeg and costs USD25 payable in Zimbabwe dollar, Rand or American dollar. Subscriber
                  members participate in all proceedings at our meeting and annual general and vote on decision
                  making. Upon joining at this tier, you receive a free t-shirt and your personalised membership card.
                </p>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={{backgroundColor: '#0B5345'}} className="mb-4" >
              <img alt="..." className="card-img-top" src={mcrt} />
              <CardContent className="p-3">
                <h5 data-aos="flip-up"  className="card-title font-weight-bold font-size-lg">
                  ASSOCIATIVE MEMBERSHIP
                </h5>
                <p className="card-text" >
                  This membership tier is open to organisations and individuals over the age of 16 who support our
                  objectives and are non-resident in Matobo, Mangwe and Brunapeg. Associate membership costs
                  USD25 for individuals and USD100 for organisations payable in Zimbabwe dollar, Rand or American
                  dollar. Organisation associate members can send representatives to participate in all proceedings at
                  our meetings and annual general meeting. They do not vote on decision making. Upon joining at
                  this tier, organisations are issued with a membership certificate. Individual associates receive a free
                  t-shirt and a personalised membership card.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
  (Memberships);

export default withStyles(styles)(MappedServices);
