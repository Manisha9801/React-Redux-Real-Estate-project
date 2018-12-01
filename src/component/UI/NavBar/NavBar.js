import React , {Component} from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem } from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

import Wrapper from './../../../hoc/Wrapper';
import RouterComponent from './../../../routercomponent/routercomponent';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    render() {
        return(
            <Wrapper>
                <Navbar color="light" light expand="md">
                    <NavItem> <RRNavLink to="/home"> WELCOME </RRNavLink></NavItem>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                                {/* since we have NavLink in reactstrap so we have to create alias for react-router-dom NavLink */}
                                <RRNavLink to="/home">Home</RRNavLink>  
                        </NavItem>
                        <NavItem>
                            <RRNavLink to="/view-all">View All Real Estate Houses</RRNavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <RouterComponent />
                {/* <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/view-all">View All Real Estate Houses</NavLink></li>
                </ul> */}
            </Wrapper>
        );
    }

}

export default NavBar;