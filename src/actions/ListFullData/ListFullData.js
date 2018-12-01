
import cardData from '../../constant/cardDemoData';
import CONSTANTS from '../../constant/constants';

export const fetchListingData = () => {
    const temp = [];
    cardData.map((card) => {
            return temp.push(card);
    });
    return ({
            type : CONSTANTS.FETCH_ALL_DATA,
            payload : {
                cardData : temp
            }
        });
}