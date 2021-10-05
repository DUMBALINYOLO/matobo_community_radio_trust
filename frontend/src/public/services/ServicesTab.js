import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Corporate from '../../containers/Templates/Operate';
import AOS from "aos";
import 'aos/dist/aos.css';
import Services from './Services';
import { getServices } from '../../actions/services';



function TabContainer(props) {
    const { children } = props;
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        paddingTop: '40px',
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        backgroundColor: theme.palette.background.paper
    }
});

const ScrollIconTabs = (props) => {
    const [value, setValue] = useState(0)
    const { classes } = props;
    const {records} = props;
    const energy = records.filter(record => record.category === 'energy')
    const hydrogen = records.filter(record => record.category === 'hydrogen')
    const fertilizer = records.filter(record => record.category === 'fertilizer')
    const precision = records.filter(record => record.category === 'precision')
    const tracking = records.filter(record => record.category === 'tracking')
    const precast = records.filter(record => record.category === 'precast')
    const prefabricated = records.filter(record => record.category === 'prefabricated')

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, []);

    useEffect(() => {
        if(!props.fetched) {
            props.getServices();
        }
        console.log('mount it!');
    
      }, []);

    const handleChange = (event, value) => {
        setValue(value);
    };


    return (
        <Corporate>
            <div className={classes.root} data-aos="fade-right">
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="secondary"
                        className={classes.tabs}
                    >
                        <Tab label="RENEWABLE ENERGY" />
                        <Tab label="HYDROGEN & AMONIA PRODUCTION" />
                        <Tab label="FERTILIZER MANUFACTURING" />
                        <Tab label="PRECISION AGRICULTURE & AUTOMATION" />
                        <Tab label="TRACKING & ASSET MANAGEMENT SYSTEMS" />
                        <Tab label="PRE CAST CONCRETE" />
                        <Tab label="PREFABRICATED BUILDINGS" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Services records={energy}/></TabContainer>}
                {value === 1 && <TabContainer><Services records={hydrogen}/></TabContainer>}
                {value === 2 && <TabContainer><Services records={fertilizer}/></TabContainer>}
                {value === 3 && <TabContainer><Services records={precision}/></TabContainer>}
                {value === 4 && <TabContainer><Services records={tracking}/></TabContainer>}
                {value === 5 && <TabContainer><Services records={precast}/></TabContainer>}
                {value === 6 && <TabContainer><Services records={prefabricated}/></TabContainer>}
            </div>
        </Corporate>
    );
}

ScrollIconTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
    records: state.services.services,
  })
  
const MappedServices = connect(
  mapStateToProps,
  {getServices} )
  (ScrollIconTabs);

  export default withStyles(styles)(MappedServices);
