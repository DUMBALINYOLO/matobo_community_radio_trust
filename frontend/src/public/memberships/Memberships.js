import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Card,

} from '@material-ui/core';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import {getMemberships} from '../../actions/memberships'
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



const Memberships = (props) => {
    const { classes } = props;

    useEffect(() => {
        if(!props.fetched) {
            props.getMemberships();
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
                    MATOBO COMMUNITY RADIO TRUST MEMBERSHIP
                </h1>
                <p 
                    className="font-size-lg"
                    style={{color: 'gold'}}
                >
                    You can be a member of Matobo Community Radio Trust through
                    the below listed categories. For more information please dont 
                    be shy to enquire

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
                            <Card className="card-box mb-4" data-aos="flip-right">
                            
                                <div className="p-5">
                                <h1 
                                    className="display-4 my-3 font-weight-bold"
                                    style={{color: '#689F38', textAlign: 'center'}}
                                >
                                    {service.name}
                                </h1>
                                <p 
                                    className="font-size-lg"
                                    style={{color: 'gold'}}
                                >
                                    {service.description}
                                </p>
                                <h1 
                                    className="display-4 my-3 font-weight-bold"
                                    style={{color: '#689F38', textAlign: 'center'}}
                                >
                                    HOW DO I BECOME A MEMBER?
                                </h1>
                                <p 
                                    className="font-size-sm mb-3"
                                    style={{color: 'gold'}}
                                >
                                    {service.becoming_a_member}
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
    records: state.memberships.memberships,
  })
  
const MappedServices = connect(
  mapStateToProps,
  {getMemberships} )
  (Memberships);

  export default withStyles(styles)(MappedServices);