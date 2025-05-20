import styled from 'styled-components';
import Modal from './Modal';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.main};
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.main};
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;

const SwitchLink = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  margin-top: 1rem;
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function SignupModal({ onClose, setShowLogin }) {
  return (
    <Modal onClose={onClose}>
      <Title>Sign Up</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
      <SwitchLink>
        Already have an account?{' '}
        <button
          on onClick={() =>{
            onClose();
            setShowLogin(true);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'green',
            textDecoration: 'underline', // Optional: mimics a link
            cursor: 'pointer'
          }}
        >
            Login
        </button>
        
      </SwitchLink>
    </Modal>
  );
}

export default SignupModal;