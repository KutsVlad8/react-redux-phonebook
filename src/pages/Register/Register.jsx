import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, FormContainer } from './Register.styled';

const Register = () => {
  return (
    <Container>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
    </Container>
  );
};

export default Register;
