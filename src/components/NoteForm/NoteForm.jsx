// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/operations';
// import { selectContacts } from 'redux/selectors';
import { Form, Label, Input, TextArea, Button } from './NoteForm.styled';
import { nanoid } from '@reduxjs/toolkit';
// import Notiflix from 'notiflix';

export const NoteForm = () => {
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  // const handleChangeInput = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.elements.name.value;
  //   const phone = form.elements.number.value;
  //   const contact = { name, phone };

  //   const oldContact = contacts.map(oldContact =>
  //     oldContact.name.toLowerCase()
  //   );

  //   if (oldContact.includes(name.toLowerCase())) {
  //     return Notiflix.Notify.failure(`${name} is alredy in contacts`);
  //   }
  //   dispatch(addContact(contact));
  //   Notiflix.Notify.success(`Contact ${name}  has been added `);
  //   form.reset();
  // };

  const nameInputNameId = nanoid(2);
  const nameInputNoteId = nanoid(2);

  return (
    <Form>
      <Label htmlFor={nameInputNameId}>Name</Label>
      <Input
        id={nameInputNameId}
        type="text"
        name="name"
        placeholder="name"
        required
      />

      <Label htmlFor={nameInputNoteId}>Note</Label>
      <TextArea
        id={nameInputNoteId}
        type="text"
        name="note"
        placeholder="note"
        required
      />

      <Button type="submit">Add note</Button>
    </Form>
  );
};
