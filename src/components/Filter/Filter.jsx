import React from 'react';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = ({value, changeFilter}) => {
  
  return (
  <FilterContainer>
    <Label >Find contacts by name</Label>
    <Input type="text" value={value}  onChange={changeFilter} />
  </FilterContainer>)
};

export default Filter;
