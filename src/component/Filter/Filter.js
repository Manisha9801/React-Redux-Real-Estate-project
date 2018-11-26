import React from 'react';

import filters from './../../constant/filter';
import Collapsable from './Collapsable/Collapsable';


const Filter = ()=>{
  return filters.map((filterOption,index) => <Collapsable key={index} filterOption={filterOption} />)
}

export default Filter;