import { nanoid } from '@reduxjs/toolkit';
import { Form, Input, Label, Button } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  const nameInputNameId = nanoid(5);
  const nameInputEmailId = nanoid(5);
  const nameInputPasswordId = nanoid(5);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputNameId}>Name</Label>
        <Input
          id={nameInputNameId}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={nameInputEmailId}>Email</Label>
        <Input
          id={nameInputEmailId}
          type="email"
          name="email"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="email"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={nameInputPasswordId}>Passwor</Label>
        <Input
          id={nameInputPasswordId}
          type="password"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="password"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Registration</Button>
      </Form>
    </>
  );
};
