import { useCreateContactMutation } from 'redux/contacts/contactsSlice';
import { toast } from 'react-toastify';
import { Form, Label, Input, ButtonSubmit } from './ContactForm.styled';

export default function ContactForm() {
  const [createContact] = useCreateContactMutation();

  const hendleSubmit = async event => {
    event.preventDefault();
   
    const name = event.currentTarget.elements.name.value;
    const phone = event.currentTarget.elements.number.value;
    event.currentTarget.reset();

   try {
     await createContact({ name, phone });
      toast.success("New contact created!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Form onSubmit={hendleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label >Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
}


