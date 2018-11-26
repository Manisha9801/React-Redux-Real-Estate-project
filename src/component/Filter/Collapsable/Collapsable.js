import React ,{Component} from 'react';
import { Collapse, Button, FormGroup } from 'reactstrap';

import CollapsableElement from './CollapsableElement/CollapsableElement';
import Wrapper from './../../../hoc/Wrapper';

class Collapsable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
           collapse: false
          };
    }

    toggle = ()=> {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const {filterOption} = this.props;
        return(
            <Wrapper className="clearfix">
                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }}>{filterOption.filterCategory}</Button> 
                <Collapse isOpen={this.state.collapse}>
                <FormGroup>
                    {filterOption.filters.map((filteritems,key) => {
                        return <CollapsableElement key={key} filteritems={filteritems} filterOption={filterOption} />
                    })}
                </FormGroup>
                </Collapse>
            </Wrapper>
        );
    }
}

export default Collapsable;