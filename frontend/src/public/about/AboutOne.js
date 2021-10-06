import React, {  useEffect  } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Paper,
  makeStyles,
} from '@material-ui/core';
import AOS from "aos";
import 'aos/dist/aos.css';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))

export default function LivePreviewExample() {
  const classes = useStyles();

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);



  return (
    <Paper data-aos="fade-left" className={classes.pageContent}>
      <Grid container spacing={4}>
      
        
        <Grid item xs={12} md={6} lg={12}>
          <Card className=" card-box-hover-rise-alt mb-4">
            
            <CardContent className="p-3">
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{color: 'gold'}}>
                MATOBO COMMUNITY RADIO TRUST
              </h3>
              <p className="card-text mb-3" style={{color: 'gold'}}>
                We are community-based organisation formed in 2020 whose major objective is to establishing and
                run a community radio station in Matobo, Mangwe and Brunapeg areas of Zimbabwe. We draw our
                membership mostly from our community. We welcome all organisations and individuals who abide by
                our constitution to be associate members.
                In September 2021, the Broadcasting Authority of Zimbabwe awarded a community broadcasting
                licence to us and we are now working to establish the envisioned radio station, Bayethe FM ‘The Voice
                from The Hills’
                Our radio programming will focus on issues promoting various areas of development for our
                community, issues affecting various groups, promoting our culture, local community and national
                news and entertaining our listeners.
                We are self-funded form our own projects run together with our communities. We are non-partisan
                and non-political.
                
              </p>
              
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </Paper>
  );
}
