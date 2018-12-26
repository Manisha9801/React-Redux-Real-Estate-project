import React from 'react';
import Wrapper from './../../hoc/Wrapper';
import './NoDataComponent.css';

const NoDataComponent = (props) => {
    return (
        <Wrapper className="noDataComponent">
            <p>OOPS!!!!! No Data Found.....Please try again</p>
        </Wrapper>
    );
}

export default NoDataComponent;