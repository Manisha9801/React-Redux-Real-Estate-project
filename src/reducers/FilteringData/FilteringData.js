import CONSTANTS from './../../constant/constants';

const initial_state = {
    filteredData : [],
    filterApplied : false
}

export default (state=initial_state,{type,payload}) => {
    switch(type) {
        case CONSTANTS.TOGGLE_FILTER : 
            return {
                ...state,
                filterApplied : payload.filterApplied
            } 
                        
        case CONSTANTS.FILTER_BY_PRICE_ASC : 
            return {
                ...state,
                filteredData : {...payload.filteredData},
                filterApplied : payload.filterApplied,
            }                            

        default  :  return state;
    }
}