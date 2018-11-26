import React from 'react';
import Wrapper from './../../../../hoc/Wrapper';
import {Label,Input } from 'reactstrap';

const CollapsableElement = (props) => {
    const {filterOption,filteritems} = props;
    return(
        <Wrapper>
            <Input type={filterOption.filterType} name={filteritems.name} value={filteritems.value} />
            <Label>{filteritems.type}</Label><br />
        </Wrapper>
    );
}

export default CollapsableElement;