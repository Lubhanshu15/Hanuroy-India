import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Brand = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const MenuItem = styled.li`
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.main};
  &:hover {
    text-decoration: underline;
  }
`;





function Navbar({ setShowLogin }) {
  return (
    <Nav>
      <Brand>Hanuroy</Brand>
      <Menu>
        <MenuItem><a href="#home">Home</a></MenuItem>
        <MenuItem><a href="#about">About Us</a></MenuItem>
        <MenuItem><a href="#services">Services</a></MenuItem>
        <MenuItem><a href="#contact">Contact Us</a></MenuItem>
        <MenuItem>
          <LoginButton onClick={() => setShowLogin(true)}>Login</LoginButton>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;