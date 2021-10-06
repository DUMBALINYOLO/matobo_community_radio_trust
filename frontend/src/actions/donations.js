import axios from 'axios';
import {
    GET_DONATIONS,


} from '../types/donationTypes';
import {
    donationsURL

} from '../constants';
import { returnErrors } from './messages';


export const getDonations = () => dispatch => {

    axios.get(donationsURL)
        .then(res => {
            dispatch({
                type: GET_DONATIONS,
                payload: res.data
            });
      }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}