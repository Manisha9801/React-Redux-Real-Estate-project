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
                const data = applyFilter(filterOption,cardData);
                debugger
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,data));
                break;
            case CONSTANTS.FILTER_BY_PRICE:
                filterOption[name] = value;
                const filteredData = applyFilter(filterOption,cardData);
                dispatch(actionCreator(CONSTANTS.SET_UPDATED_DATA,filteredData));
                break;
            case CONSTANTS.FILTER_BY_CITY:
                filterOption[name].push(value);
                break;        
            default:
                filterOption[name] = value;   
                break;
        }
    }
}

export const applyFilter = (filterOption,cardData) => {
    let updated_list = Object.values(cardData);    
    console.log("updated_list",updated_list);
    debugger
    Object.keys(filterOption).map((key) => {
        if(key === CONSTANTS.FILTER_BY_PRICE) {
                if(filterOption[key]!=="") {
                    if(filterOption[key] === "asc") {
                         updated_list.sort((obj1,obj2) => {
                            if(obj1.price > obj2.price)  return 1;
                            else if(obj1.price < obj2.price) return -1;
                            else return 0;
                        });                         
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
            updated_list = updated_list.filter((element) => space.indexOf(element.type)>-1);  //0 if found, -1 if not found
        }
        // else if (key === CONSTANTS)
    });
    return updated_list;
}  