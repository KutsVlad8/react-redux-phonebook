import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Input, Button, Label } from './ContactForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeInput = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name, number };

    const oldContact = contacts.map(oldContact =>
      oldContact.name.toLowerCase()
    );

    if (oldContact.includes(name.toLowerCase())) {
      return Notiflix.Notify.failure(`${name} is alredy in contacts`);
    }
    dispatch(addContact(contact));
    Notiflix.Notify.success(`Contact ${name}  has been added `);
    form.reset();
  };

  const nameInputNameId = nanoid(2);
  const nameInputNumberId = nanoid(2);

  return (
    <Form onSubmit={handleChangeInput}>
      <Label htmlFor={nameInputNameId}>Name</Label>
      <Input
        id={nameInputNameId}
        type="text"
        name="name"
        placeholder="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor={nameInputNumberId}>Number</Label>
      <Input
        id={nameInputNumberId}
        type="tel"
        name="number"
        placeholder="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">add contact</Button>
    </Form>
  );
};
