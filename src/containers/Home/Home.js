import React ,{Component} from 'react';
import Wrapper from './../../hoc/Wrapper';
import CarouselComponent from './../../component/UI/Carousel/Carousel';

class Home extends Component {
    render() {
      return (
        <Wrapper>
            <CarouselComponent />
        </Wrapper>
      )
    }
}

export default Home;