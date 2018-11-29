import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Wrapper from './../../../../hoc/Wrapper';
import {Label,Input } from 'reactstrap';
//actions
import {applyFilter} from './../../../../actions/FilteringData/FilterData';

// import {AuthContext} from './../../../../containers/ListAllHouses/ListAllHouses'; 

class CollapsableElement extends Component {

    handleClick = (e) => {
        this.props.applyFilter(e.target.name,e.target.value);        
    }


    render() {
        const {filterOption,filteritems} = this.props;
        // const teee =  
            // <AuthContext.Consumer>
                // {temp.length>0?<p>{`Manisha`}</p>:<p>{`Kumari`}</p>}
            // </AuthContext.Consumer>
        return(
            <Wrapper>          
                {/* {teee} */}
                <Input  type={filterOption.filterType} onClick={(e) =>this.handleClick(e)} id={filteritems.name} name={filteritems.name} value={filteritems.value} />
                <Label htmlFor={filteritems.name} >{filteritems.type}</Label><br />
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
    return bindActionCreators({applyFilter},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CollapsableElement);