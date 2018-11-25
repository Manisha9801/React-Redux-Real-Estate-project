import React , {Component} from 'react';
import Wrapper from './../../hoc/Wrapper';
import { Container, Row, Col } from 'reactstrap';
import CardComponent from './../../component/UI/Cards/Cards';

class ListAllHouses extends Component {
    render() {
        return(
            <Wrapper>
                <Container>
                    <Row>
                        <Col lg="3">
                            Manisha
                        </Col>
                        <Col lg="9">
                            <Row>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                            </Row>
                            <br /><br />
                            <Row>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                            </Row>
                            <br /><br />
                            <Row>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                                <Col lg="4"><CardComponent /></Col>
                            </Row>
                            <br /><br />
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
} 


export default ListAllHouses;