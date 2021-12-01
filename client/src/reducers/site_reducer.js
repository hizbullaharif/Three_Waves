import {
    GET_SITE_DATA,
    UPDATE_SITE_DATA
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={},action){
    switch(action.type){
        case GET_SITE_DATA:
            return { ...state, siteData: action.payload }
        case UPDATE_SITE_DATA:
            return { ...state, siteData: action.payload.siteInfo }
        default:
            return state;
    }
}