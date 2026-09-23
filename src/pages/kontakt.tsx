
import React from "react";
import styled from "styled-components";

// Styling af hele kontaktsiden
const Page = styled.main`
  border-top: 1px solid #9c735f;
  padding-top: 10px;
  padding-left: 18px;
`;

// Styling af overskriften
const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: bold;
  color: #e8753d;
`;

// Styling af kontaktformularen
const Form = styled.form`
  width: 220px;
`;

// Gruppe med label og input
const FormGroup = styled.div`
  margin-bottom: 9px;
`;

// Styling af labels
const Label = styled.label`
  display: block;
  font-size: 10px;
  color: #333;
  margin-bottom: 3px;
`;

// Markering af obligatoriske felter
const Required = styled.span`
  color: #e8753d;
`;

// Styling af tekstfelter
const Input = styled.input`
  box-sizing: border-box;
  width: 220px;
  height: 18px;
  padding: 2px 6px;

  border: none;
  border-bottom: 1px solid #d9c4bb;
  background-color: #f6f3f2;

  font-size: 9px;

  // Farve på placeholder-tekst
  &::placeholder {
    color: #bdbdbd;
  }

  // Fjerner standard outline ved fokus
  &:focus {
    outline: none;
  }
`;

// Styling af beskedfeltet
const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 220px;
  height: 78px;
  padding: 6px;

  border: none;
  border-bottom: 1px solid #d9c4bb;

  background-color: #f6f3f2;

  font-size: 9px;
  resize: none;

  // Farve på placeholder-tekst
  &::placeholder {
    color: #bdbdbd;
  }

  // Fjerner standard outline ved fokus
  &:focus {
    outline: none;
  }
`;

// Container til knapperne
const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 11px;
`;

// Styling af knapper
const Button = styled.button`
  width: 67px;
  height: 19px;

  border: 1px solid #9c8174;
  border-radius: 2px;

  background-color: #d8bfb3;
  color: #222;

  font-size: 9px;
  cursor: pointer;

  // Ændrer farve ved hover
  &:hover {
    background-color: #cdb0a3;
  }
`;

// Kontaktformularens komponent
const KontaktOs: React.FC = () => {
  return (
    <Page>

      {/* Overskrift til kontaktformularen */}
      <Title>Kontakt os</Title>

      <Form>

        {/* Felt til navn */}
        <FormGroup>
          <Label htmlFor="navn">
            Dit navn: <Required>*</Required>
          </Label>

          <Input
            id="navn"
            type="text"
            placeholder="Indtast dit navn"
          />
        </FormGroup>

        {/* Felt til email */}
        <FormGroup>
          <Label htmlFor="email">
            Din email: <Required>*</Required>
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="Indtast din email"
          />
        </FormGroup>

        {/* Felt til besked */}
        <FormGroup>
          <Label htmlFor="besked">
            Din besked <Required>*</Required>
          </Label>

          <Textarea
            id="besked"
            placeholder="Indtast en besked"
          />
        </FormGroup>

        {/* Knapper til formularen */}
        <ButtonContainer>
          <Button type="submit">Send</Button>
          <Button type="button">Annuller</Button>
        </ButtonContainer>

      </Form>
    </Page>
  );
};

export default KontaktOs;

