import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({filter,contacts}) => {
  const normalizedFilter = filter.toLowerCase();
  const visibledContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
  <>
    {visibledContacts && (
      <ul>
          {visibledContacts.map(({ name, id, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={phone}
            
          />
        );
      })}
      </ul>
    )}
  </>)
};

export default ContactList;
