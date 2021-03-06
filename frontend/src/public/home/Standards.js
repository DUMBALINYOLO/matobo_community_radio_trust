import React, { Fragment, useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
import Circle from 'react-circle';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});


function LivePreviewExample(props) {
  const { classes } = props;

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  return (
    <Fragment>
      <div className={classes.root} data-aos="fade-right">

        <h1 style={{textAlign: 'center', color: 'teal'}}>OUR PRINCIPLES</h1>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={3}>
            <Card className="mb-4 text-center px-4 pb-4 pt-2">
              <div className="gauge-wrapper">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={160} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={100} // Number: Update to change the progress and percentage.
                  progressColor="var(--danger)" // String: Color of "progress" portion of circle.
                  bgColor="var(--light)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-black-50">RELIABILITY</div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card className="mb-4 text-center px-4 pb-4 pt-2">
              <div className="gauge-wrapper">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={160} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={100} // Number: Update to change the progress and percentage.
                  progressColor="var(--first)" // String: Color of "progress" portion of circle.
                  bgColor="var(--secondary)" // String: Color of "empty" portion of circle.
                  textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-black-50">FLEXIBILITY</div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card className="mb-4 bg-premium-dark text-center px-4 pb-4 pt-2">
              <div className="gauge-wrapper">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={160} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={100} // Number: Update to change the progress and percentage.
                  progressColor="var(--success)" // String: Color of "progress" portion of circle.
                  bgColor="rgba(255,255,255,.3)" // String: Color of "empty" portion of circle.
                  textColor="rgba(255,255,255,.6)" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-white-50">INNOVATION</div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card className="mb-4 bg-night-sky text-center px-4 pb-4 pt-2">
              <div className="gauge-wrapper">
                <Circle
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="3s" //String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={160} // Number: Defines the size of the circle.
                  lineWidth={14} // Number: Defines the thickness of the circle's stroke.
                  progress={100} // Number: Update to change the progress and percentage.
                  progressColor="var(--warning)" // String: Color of "progress" portion of circle.
                  bgColor="rgba(255,255,255,.3)" // String: Color of "empty" portion of circle.
                  textColor="rgba(255,255,255,.6)" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={true}
                  textStyle={{
                    fontSize: '60px',
                    fontWeight: 'bold'
                  }} // Boolean: Rounded/Flat line ends
                  showPercentage={true} // Boolean: Show/hide percentage.
                  showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                />
              </div>
              <div className="text-white-50">PRO ACTIVE</div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}


export default withStyles(styles)(LivePreviewExample);