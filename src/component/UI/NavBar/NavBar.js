import React , {Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';
import {Route, NavLink as RRNavLink, Switch} from 'react-router-dom';

import Home from './../../../containers/Home/Home';
import ListAllHouses from './../../../containers/ListAllHouses/ListAllHouses';
import Wrapper from './../../../hoc/Wrapper';

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
                    <NavbarBrand> <RRNavLink to="/home"> WELCOME </RRNavLink></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                {/* since we have NavLink in reactstrap so we have to create alias for react-router-dom NavLink */}
                                <RRNavLink to="/home">Home</RRNavLink>  
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <RRNavLink to="/view-all">View All Real Estate Houses</RRNavLink>
                        </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                {/* <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/view-all">View All Real Estate Houses</NavLink></li>
                </ul> */}
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/view-all" component={ListAllHouses} />
                </Switch>
            </Wrapper>
        );
    }

}

export default NavBar;