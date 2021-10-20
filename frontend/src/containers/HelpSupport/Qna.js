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
      <PapperBlock title="ABOUT US"  whiteBg>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}} className=' card-box-hover-rise' >Who we are and what we do?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography >
              We are a registered community-based organisation (Trust) operating in the Matobo district,
              Matabeleland South province in Zimbabwe. We are licenced by the Broadcasting Authority of
              Zimbabwe in terms of the Broadcasting Act to operate a community radio station, Bayethe FM
              broadcasting in indigenous languages spoken in Matobo, Mangwe and Brunapeg areas of Zimbabwe.
              We are a non-political organisation and broadcaster focusing on social and developmental issues
              within our community.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{color: '#689F38'}}   className=' card-box-hover-rise'>Our Objectives</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                We aim among other objectives, to be a source of local and national news, highlight our culture and
                arts, promote unity, provide entertainment, promote business and tourism, give career and social
                guidance to the youth. We are a platform for interaction between leadership and members of the
                community through radio.
              </p>
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
