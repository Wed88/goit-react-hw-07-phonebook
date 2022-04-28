import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import contactsActions from 'redux/contacts/contacts-actions';
// import { getFilter } from 'redux/contacts/contacts-selectors';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = ({value, changeFilter}) => {
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch()
  
  // const changeFilter = event => {
  //   dispatch(contactsActions.changeFilter(event.target.value));
  // };
  
  return (
  <FilterContainer>
    <Label >Find contacts by name</Label>
    <Input type="text" value={value}  onChange={changeFilter} />
  </FilterContainer>)
};

export default Filter;
