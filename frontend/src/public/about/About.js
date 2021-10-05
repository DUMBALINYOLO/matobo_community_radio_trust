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
            <Typography className={classes.heading}>COMPANY NAME</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                HLETIPANG
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
                21 MAY 2018

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className=' card-box-hover-rise-alt' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>MAIN BUSINESS</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                FERTILIZER MANUFACTURING, PRECISION AGRICULTUE & AUTOMATION,
                PRECAST CONCRETE, PREFABRICATED BUILDINGS, ASSET MANAGEMENT & TRACKING,
                RENEWABLE ENERGY SYSTEMS & HYDROGEN & AMOMONIA PRODUCTION


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
                48A G. SILUNDIKA STREET
                BETWEEN 3rd & 4th Avenues
                Bulawayo, Zimbabwe
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
                48A G. SILUNDIKA STREET
                BETWEEN 3rd & 4th Avenues
                Bulawayo, Zimbabwe
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>TELEPHONE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                +263 965796, 884866/5, 67047, +263 772801161, +263712622438
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>FAX</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              2639884868, 884867
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel10'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>EMAIL</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              info@flexible.co.zw, psithole@flexible.co.zw
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel style={{color: 'gold'}} className='card-box-hover-rise-alt' expanded={expanded === 'panel11'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>SKYPE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              hletipang
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
  );
}



export default withStyles(styles)(About);
