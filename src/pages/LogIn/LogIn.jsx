import { LoginForm } from 'components/LogInForm/LogInForm';
import { Container, FormContainer } from './LogIn.styled';

const LogIn = () => {
  return (
    <Container>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default LogIn;
