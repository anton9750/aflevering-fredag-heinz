
import styled from "styled-components";

// Styling af login-siden
const LoginPage = styled.main`
  width: 367px;
  margin-left: 32px;
  margin-top: 15px;
`;

// Styling af overskriften
const Title = styled.h1`
  color: #d8754f;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
`;

// Styling af login-formularen
const LoginForm = styled.form`
  width: 367px;
`;

// Gruppe med label og input
const FormGroup = styled.div`
  margin-bottom: 14px;
`;

// Styling af labels
const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #222;
  margin-bottom: 4px;

  // Farve på obligatorisk markering
  span {
    color: #d8754f;
  }
`;

// Styling af inputfelter
const Input = styled.input`
  box-sizing: border-box;
  width: 367px;
  height: 30px;

  border: none;
  border-top: 1px solid #dfb6a7;
  background-color: #f7f4f3;

  padding: 6px 10px;
  font-size: 14px;

  // Farve på placeholder-tekst
  &::placeholder {
    color: #bdbdbd;
  }

  // Styling når inputfeltet er aktivt
  &:focus {
    outline: none;
    border-top-color: #d8754f;
  }
`;

// Container til knapperne
const Buttons = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 4px;
`;

// Styling af knapper
const Button = styled.button`
  width: 113px;
  height: 31px;

  background-color: #d8b9ae;
  border: 1px solid #8d7269;
  border-radius: 3px;

  font-size: 14px;
  color: #222;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cda99d;
  }
`;

// Container til links
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 35px;
`;

// Styling af links
const Link = styled.a`
  color: #268ac1;
  text-decoration: none;
  font-size: 14px;

  // Understregning ved hover
  &:hover {
    text-decoration: underline;
  }
`;

// Login-komponenten
function Login() {
  return (
    <LoginPage>

      {/* Overskrift */}
      <Title>Login</Title>

      <LoginForm>

        {/* Email-felt */}
        <FormGroup>
          <Label htmlFor="email">
            Din email: <span>*</span>
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="Indtast din email"
          />
        </FormGroup>

        {/* Adgangskode-felt */}
        <FormGroup>
          <Label htmlFor="password">
            Din adgangskode: <span>*</span>
          </Label>

          <Input
            id="password"
            type="password"
            placeholder="Indtast din adgangskode"
          />
        </FormGroup>

        {/* Login- og annuller-knapper */}
        <Buttons>
          <Button type="submit">Login</Button>
          <Button type="button">Annuller</Button>
        </Buttons>

      </LoginForm>

      {/* Links til andre sider */}
      <Links>
        <Link href="/forgot-password">Glemt adgangskode?</Link>
        <Link href="/register">Opret profil</Link>
      </Links>

    </LoginPage>
  );
}

export default Login;

