import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Container, FormContainer } from './Registration.styled';

const Registration = () => {
  return (
    <Container>
      <FormContainer>
        <RegistrationForm />
      </FormContainer>
    </Container>
  );
};

export default Registration;
