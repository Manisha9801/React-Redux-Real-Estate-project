import React , {Component} from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem } from 'reactstrap';
import {Route, NavLink as RRNavLink, Switch, Redirect} from 'react-router-dom';

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

                {/* <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/view-all">View All Real Estate Houses</NavLink></li>
                </ul> */}
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/view-all" component={ListAllHouses} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Wrapper>
        );
    }

}

export default NavBar;