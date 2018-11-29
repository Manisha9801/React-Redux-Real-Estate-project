import CONSTANTS from './../../constant/constants';

const initial_state = {
    filteredData : []
}

export default (state=initial_state,{type,payload}) => {
    switch(type) {     
        
        case CONSTANTS.COPY_DEFAULT_DATA : 
            return {
                ...state,
                filteredData : {...payload.filteredData}
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