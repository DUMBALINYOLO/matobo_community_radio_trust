import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';
import AOS from "aos";
import 'aos/dist/aos.css';




const AdvertCard =(props) => {
    const {
      classes,
      thumbnail,
      full_name,
      list,
      detailOpen,
      width,

    } = props;

    useEffect(() =>{
      AOS.init({duration : 2000})
  
    }, []);

    return (
      <Card data-aos="flip-left" style={{color: 'gold'}} className={classNames(classes.cardProduct, 'card-box-hover-rise', isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <CardMedia
          className={classes.mediaProduct}

          image={thumbnail}
          title={full_name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          <h8 style={{textAlign: 'center'}}>
            {full_name}
          </h8>   
        </CardContent>
        <CardActions className={classes.price}>
          <div className={classes.rightAction}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={detailOpen}
            >
              CLICK TO LEARN MORE
            </Button>
          </div>
        </CardActions>
      </Card>
    );
}


const AdvertCardResponsive = withWidth()(AdvertCard);
export default withStyles(styles)(AdvertCardResponsive);
