import React , {Component} from 'react';
import NavBar from './../../component/UI/NavBar/NavBar';
import Wrapper from './../../hoc/Wrapper';

class Layout extends Component {
    render() {
        return(
            <Wrapper>
                <NavBar />
            </Wrapper>
        );
    }
}

export default Layout;