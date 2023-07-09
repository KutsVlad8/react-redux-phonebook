// import { ContactsList } from 'components/ContactsList/ContactsList';
// import { ContactsFilter } from 'components/ContactsFiter/ContactsFiter';
import { NoteForm } from 'components/NoteForm/NoteForm';
import {
  Container,
  FormContainer,
  Head,
  // LeftContainer,
  // Template,
  // Title,
} from './Notes.styled';
// import { NotesList } from 'components/NotesList/NotesList';
// import { NotesFilter } from 'components/NotesFilter/NotesFilter';

const Notes = () => {
  return (
    <>
      <Head>Note</Head>
      <Container>
        <FormContainer>
          <NoteForm />
        </FormContainer>

        {/* {contacts.length > 0 ? (
          <LeftContainer>
            <Title>Contacts</Title>
            <NotesFilter />

            <NotesList />
          </LeftContainer>
        ) : (
          <Template>add new contact</Template>
        )} */}
      </Container>
    </>
  );
};

export default Notes;
