import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  PapperBlock  from '../../components/PapperBlock/PapperBlock';
import styles from './helpSupport-jss';

class Qna extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <PapperBlock title="FREQUENTLY ASKED QUESTIONS" icon="ios-help-circle-outline" whiteBg desc="KNOW MORE ABOUT MATOBO COMMUNITY RADIO TRUST">
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise' >WHAT ARE YOU ALL ABOUT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{color: 'gold'}}>
              LOREM IPSUM SENGULIMUN ZADIAXA KWALIASTO LEVIATHON
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise'>HOW DO I BECOME A MEMBER</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{color: 'gold'}}>
              <p>
                  PHESMANTOS INSINDIA SANGUINA SELIUM HELGETIAM
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise'>HOW DO I DONATE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{color: 'gold'}}>
              <p>
                  NEMO JUDEX IN SUA CASUA. LEX LE LIGANDO LEX LI LEGENDO
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise'>ARE YOU POLITICAL</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{color: 'gold'}}>
              <p>
                  EXETO SILIUM SEQUELIA ALIQUID NOVI SUB SOLE
              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise'>WHERE ARE YOU FROM</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{color: 'gold'}} >
                EX MATOBO ALIQUID NOVI AFFETI. NOVI ALIQUID
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </PapperBlock>
    );
  }
}

Qna.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qna);
