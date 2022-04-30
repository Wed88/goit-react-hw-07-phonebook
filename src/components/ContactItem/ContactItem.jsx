import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Item, Text, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  

  return (
  <Item>
    <Text>
      {name}:&nbsp; {number}
    </Text>
    <Button type="button" onClick={() =>  deleteContact(id)}>
     {isDeleting ? 'Deleting...' : 'Delete'}
    </Button>
  </Item>)
};

export default ContactItem;
