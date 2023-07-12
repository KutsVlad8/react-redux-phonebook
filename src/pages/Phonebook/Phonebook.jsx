import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
// import { ContactsFilter } from 'components/ContactsFiter/ContactsFiter';
import {
  Container,
  FormContainer,
  Head,
  LeftContainer,
  Template,
  Title,
} from './Phonebook.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Head>PhoneBook</Head>
      <Container>
        <FormContainer>
          <ContactForm />
        </FormContainer>

        {contacts.length > 0 ? (
          <LeftContainer>
            <Title>Contacts</Title>
            {/* <ContactsFilter /> */}

            <ContactsList />
          </LeftContainer>
        ) : (
          <Template>add new contact</Template>
        )}
      </Container>
    </>
  );
};

export default Phonebook;
