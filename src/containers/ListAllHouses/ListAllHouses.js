import React , {Component} from 'react';
import Wrapper from './../../hoc/Wrapper';
import { Container, Row, Col } from 'reactstrap';

import CardComponent from './../../component/UI/Cards/Cards';
import Filter from './../../component/Filter/Filter';


class ListAllHouses extends Component {
    render() {
        return(
            <Wrapper>
                <Container>
                    <Row>
                        <Col lg="3">
                            <Filter />
                        </Col>
                        <Col lg="9">
                            <Row>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                                <Col lg="4" md="6" sm="12"><CardComponent /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
} 


export default ListAllHouses;