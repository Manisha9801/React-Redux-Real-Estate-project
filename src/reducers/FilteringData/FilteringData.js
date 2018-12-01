import CONSTANTS from './../../constant/constants';

const initial_state = {
    filteredData : [],
    filterOption : {
        "ByPrice":"",
        "BySpace":[],
        "ByCity":[]
    }
}

export default (state=initial_state,{type,payload}) => {
    switch(type) {     
        
        case CONSTANTS.COPY_DEFAULT_DATA : 
            return {
                ...state,
                filteredData : {...payload}
            }
        
        case CONSTANTS.SET_UPDATED_DATA : 
            return {
                ...state,
                filteredData : {...payload}
            }        
            
        case CONSTANTS.APPLY_FILTER_OPTIONS   : {
            return { 
                ...state,
                filterOption : {...payload}
            }
        }

        default  :  return state;
    }
}