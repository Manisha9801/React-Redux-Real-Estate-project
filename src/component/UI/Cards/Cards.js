import React from 'react';
import { Card, CardImg, CardBody,CardTitle    , Button } from 'reactstrap';
import img from './../../../assets/images/img2.jpg';
import'./Cards.css';

const imagePaath = './../../../assets/images';
const CardComponent = (props) => {
 const {card} = props;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={require(`./../../../assets/images/${card.image.url}`)} alt={`${card.image.altText}`} />
        <CardBody>
          <CardTitle>{card.type}</CardTitle>
          <div style={{"textOverflow" : "ellipsis"}}>
            <p>{card.desc}</p>
            <b>Location : {card.city}</b>
            <br />
            <b>Price : {card.amount}</b>
            </div>
          <Button className="btn btn-success">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;