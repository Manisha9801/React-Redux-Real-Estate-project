import React , {Component} from 'react';
import Wrapper from './../../hoc/Wrapper';
import { Container, Row, Col } from 'reactstrap';

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import CardComponent from './../../component/UI/Cards/Cards';
import Filter from './../../component/Filter/Filter';
import {fetchListingData} from './../../actions/ListFullData/ListFullData';
import {setDefaultList} from './../../actions/FilteringData/FilterData';

class ListAllHouses extends Component {

    componentWillMount() {
        this.props.fetchListingData();
        this.props.setDefaultList();
    }

    renderCardData = () => {
        const {filteredData} = this.props;
        return Object.keys(filteredData).map((key) => {
            const card = filteredData[key];
            return <Col key={key} lg="4" md="6" sm="12"><CardComponent card={card}/></Col>
        });
    }

    render() { 
        const {filteredData} = this.props;
        return(
            <Wrapper>
                <Container>
                    <Row>
                        <Col lg="3">
                            <Filter />  
                        </Col>
                        <Col lg="9">
                            <Row>
                                {Object.keys(filteredData).length ? this.renderCardData():<p>No data found..</p>}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
} 

const mapStateToProps = (state) => {
    const temp =  {
        // cardData : state.list.cardData,
        filterApplied : state.filter.filterApplied,
        filteredData : state.filter.filteredData
    }
    return temp;
}

const mapPropsToDispatch = dispatch=>{
    return bindActionCreators({fetchListingData,setDefaultList}, dispatch)
}


export default connect(mapStateToProps,mapPropsToDispatch)(ListAllHouses);