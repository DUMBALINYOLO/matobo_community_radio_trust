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
            <span className="ribbon-angle ribbon-angle--bottom-right ribbon-warning">
              <small >HLETIPANG</small>
            </span>
            
            <CardContent className="p-3">
              <h3 className="heading-6 mt-4 mb-3 font-weight-bold" style={{color: 'gold'}}>
                VISION 
              </h3>
              <p className="card-text mb-3" style={{color: 'gold'}}>
                To be key be a key player in sustainable energy, asset management, 
                fertilizer manufactuing, precision agriculture, precast concrete &
                 prefrabricated buildings throughout Africa
                
              </p>
              <Button color="primary" title="Learn more">
                <span>Learn more</span>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </Paper>
  );
}
