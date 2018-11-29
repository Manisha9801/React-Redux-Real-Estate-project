import CONSTANTS from './../../constant/constants';

const initial_State = {
    cardData : []
};

export default (state = initial_State,{type,payload}) => {
    switch(type) {
        case CONSTANTS.FETCH_ALL_DATA : 
            return {
                ...state,
                cardData : {...payload.cardData}
            }
        default  :  return state;
    }
}