import axios from 'axios';
import {
    GET_MEMBERSHIPS,


} from '../types/membershipTypes';
import {
    membershipsURL

} from '../constants';
import { returnErrors } from './messages';


export const getMemberships = () => dispatch => {

    axios.get(membershipsURL)
        .then(res => {
            dispatch({
                type: GET_MEMBERSHIPS,
                payload: res.data
            });
      }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}