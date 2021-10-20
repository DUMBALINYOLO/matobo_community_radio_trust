import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Corporate from '../../containers/Templates/Corporate';
import AOS from "aos";
import 'aos/dist/aos.css';
import Services from './Services';
import { getProjects } from '../../actions/services';



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
        paddingTop: '100px',
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

    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, []);

    useEffect(() => {
        if(!props.fetched) {
            props.getProjects();
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
                        <Tab label="PROJECTS" />

                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Services records={records}/></TabContainer>}

            </div>
        </Corporate>
    );
}

ScrollIconTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
    records: state.services.projects,
  })

const MappedServices = connect(
  mapStateToProps,
  {getProjects} )
  (ScrollIconTabs);

  export default withStyles(styles)(MappedServices);
