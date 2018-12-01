import CONSTANTS from './../../constant/constants';


const actionCreator =(type, payload)=>{
    return {
        type,
        payload
    }
}

export const setDefaultList = () => {
    return(dispatch,getState) => {
        const initial_state = getState().list.cardData;
        dispatch(actionCreator(CONSTANTS.COPY_DEFAULT_DATA,initial_state));
    }
}

export const applyFilterOptions = (name,value) => {
    return(dispatch,getState) => {
        let filterOption = getState().filter.filterOption;
        let cardData = getState().list.cardData;
        switch (name) {
            case CONSTANTS.FILTER_BY_SPACE:
                filterOption[name].push(value);
                dispatch(actionCreator(CONSTANTS.APPLY_FILTER_OPTIONS, filterOption));
                const BySpaceFiltereddata = applyFilter(filterOption,cardData);
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,BySpaceFiltereddata));
                break;
            case CONSTANTS.FILTER_BY_PRICE:
                filterOption[name] = value;
                dispatch(actionCreator(CONSTANTS.APPLY_FILTER_OPTIONS, filterOption));
                const ByPriceFilteredData = applyFilter(filterOption,cardData);
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,ByPriceFilteredData));
                break;
            case CONSTANTS.FILTER_BY_CITY:
                filterOption[name].push(value);
                dispatch(actionCreator(CONSTANTS.APPLY_FILTER_OPTIONS, filterOption));
                const ByCityFilteredData = applyFilter(filterOption,cardData);
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,ByCityFilteredData));
                break;        
            default:
                filterOption[name] = value;   
                break;
        }
    }
}

export const applyFilter = (filterOption,cardData) => {
    let updated_list = Object.values(cardData);    
    // console.log("updated_list",updated_list);
    Object.keys(filterOption).map((key) => {
        if(key === CONSTANTS.FILTER_BY_PRICE) {
                if(filterOption[key]!=="") {
                    if(filterOption[key] === "asc") {
                         updated_list.sort((obj1,obj2) => {
                            if(obj1.price > obj2.price)  return 1;
                            else if(obj1.price < obj2.price) return -1;
                            else return 0;
                        }); 
                        // console.log("updated_listupdated_list",updated_list);
                    }
                    else if (filterOption[key] === "desc") {
                        updated_list.sort((obj1,obj2) => {
                            if(obj1.price > obj2.price) return -1;
                            else if(obj1.price < obj2.price) return 1;
                            else return 0;
                        });      
                    }
                }
        }
        else if(key === CONSTANTS.FILTER_BY_SPACE) {
            const space = filterOption[key];
            if(space.length > 0)
                updated_list = updated_list.filter((element) => space.indexOf(element.type)>-1);  //0 if found, -1 if not found
        }
        else if(key === CONSTANTS.FILTER_BY_CITY) {
            const city = filterOption[key];
            // console.log('city',city);
            if(city.length > 0)
                updated_list = updated_list.filter((element) => city.indexOf(element.city)>-1);  //0 if found, -1 if not found
        }
    });
    // console.log("updated_list",updated_list);
    return updated_list;
}  

export const removeFilters = (name,value) => {
    return (dispatch,getState) => {
        const filterOption = getState().filter.filterOption;  
        const cardData = getState().list.cardData;
        // console.log("filterOption",filterOption);           
        Object.keys(filterOption).map((key) => {
            // console.log('filterOption[key]',filterOption[key]);
            if(filterOption[key].length>0&&(typeof(filterOption[key])!="string")) {
                // console.log('type',typeof(filterOption[key])!=string);
                // debugger
                filterOption[key] = filterOption[key].filter(item => item!==value);
                dispatch(actionCreator(CONSTANTS.APPLY_FILTER_OPTIONS, filterOption));
                const filteredData = applyFilter(filterOption,cardData);
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,filteredData));
            }
            // filterOption[key].filter(item => console.log("item",item));
        }); 
    }
}