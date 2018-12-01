import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Wrapper from './../../../../hoc/Wrapper';
import {Label,Input } from 'reactstrap';


import {applyFilter,applyFilterOptions} from './../../../../actions/FilteringData/FilterData';

class CollapsableElement extends Component {

    handleClick = (e) => {
        this.props.applyFilterOptions(e.target.name,e.target.value);
    }

    render() {
        const {filterOption,filteritems} = this.props;
        return(
            <Wrapper>          
                <Input  type={filterOption.filterType} onClick={(e) =>this.handleClick(e)} id={filteritems.value} name={filteritems.name} value={filteritems.value} />
                <Label htmlFor={filteritems.value} >{filteritems.type}</Label><br />
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        filterApplied : state.filter.filterApplied,
        filterData : state.filter.filteredData
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({applyFilter,applyFilterOptions},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CollapsableElement);