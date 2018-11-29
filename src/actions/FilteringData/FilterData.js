import CONSTANTS from './../../constant/constants';

export const toggleFilter =(currentStatus) => {
    return {
        type : CONSTANTS.TOGGLE_FILTER,
        payload : {
            filterApplied : !currentStatus
        }
    }
}


export const applyFilter = (name,value) => {
    return (dispatch,getState)=>{
        const current_state = getState().list.cardData;
        let updated_list = [];
        switch(name) {
            case CONSTANTS.FILTER_BY_PRICE : 
                if(value === "asc") {
                    updated_list = Object.values(current_state);
                    updated_list.sort((obj1,obj2) => {
                        if(obj1.price > obj2.price) {
                            return 1;
                        }
                        else if(obj1.price < obj2.price) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    });    
                    // console.log(" updated_list", updated_list);
                    // return 
                    dispatch(actionCreator(CONSTANTS.FILTER_BY_PRICE_ASC,{
                        filteredData : updated_list,
                        filterApplied : true
                    }));
                    
                }
                // {
                //     type : CONSTANTS.FILTER_BY_PRICE_ASC,
                //     payload : {
                //         filteredData : updated_list,
                //         filterApplied : true
                //     }
                // }
                break;
                default:
                    dispatch(actionCreator("MY_TYPE", []));
        }
        
    }
} 

export const filterDataByPrice = () => {
    
} 


const actionCreator =(type, payload)=>{
    return {
        type,
        payload
    }
}