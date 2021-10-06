import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './helpSupport-jss';
import { 
  makeStyles,
  Paper,
} from '@material-ui/core';


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



const About =(props) => {
  const [expanded, setExpanded] = useState('panel1')


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    const { classes } = props;
    const cecisa = useStyles();


    return (
      <Paper className={cecisa.pageContent}>

        <ExpansionPanel className='card-box-hover-rise-alt' style={{color: 'gold'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>ORGANIZATION NAME</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                MATOBO COMMUNITY RADIO TRUST
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel  style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>DATE OF ESTABLISHMENT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                2020 

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>BUSINESS ADDRESS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Adress Suite 2, Astra Complex, 9th Ave, Bulawayo
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className=' card-box-hover-rise-alt' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>POSTAL ADDRESS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Adress Suite 2, Astra Complex, 9th Ave, Bulawayo
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>TELEPHONE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              0785999229
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel10'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>EMAIL</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Matobo.trust@gmail.com
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </Paper>
  );
}



export default withStyles(styles)(About);
