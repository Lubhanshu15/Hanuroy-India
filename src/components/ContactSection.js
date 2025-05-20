import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Contact = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Column = styled.div`
  width: 40%;
  min-width: 300px;
`;

const FormTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.main};
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  border-radius: 5px;
  resize: vertical;
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

const BookCallButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.main};
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;


function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Send data to backend API here
  };

  return (
    <Contact id="contact">
      <Column>
        <FormTitle>Contact Us via Email</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Textarea
            placeholder="Message"
            rows="5"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Column>
      <Column>
        <FormTitle>Book a Call</FormTitle>
        <BookCallButton>Schedule a Call</BookCallButton>
      </Column>
    </Contact>
  );
}
//function ContactSection() {
  //return (
    //<Contact id="contact">
      //<Column>
        //<FormTitle>Contact Us via Email</FormTitle>
        //<Form>
          //<Input type="text" placeholder="Name" />
          //<Input type="email" placeholder="Email" />
          //<Textarea placeholder="Message" rows="5" />
          //<SubmitButton type="submit">Send Message</SubmitButton>
        //</Form>
      //</Column>
      //<Column>
        //<FormTitle>Book a Call</FormTitle>
        //<BookCallButton>Schedule a Call</BookCallButton>
      //</Column>
    //</Contact>
  //);
//}

export default ContactSection;