import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle    , Button } from 'reactstrap';
import img from './../../../assets/images/img2.jpg';
import'./Cards.css';

const CardComponent = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText style={{"textOverflow" : "ellipsis"}}>Some quick CardComponent text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;