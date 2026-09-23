import React from "react";
import styled from "styled-components";

const Page = styled.main`
  border-top: 1px solid #9c735f;
  padding-top: 10px;
  padding-left: 18px;
`;

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: bold;
  color: #e8753d;
`;

const Form = styled.form`
  width: 220px;
`;

const FormGroup = styled.div`
  margin-bottom: 9px;
`;

const Label = styled.label`

  display: block;

  font-size: 10px;

  color: #333;

  margin-bottom: 3px;
`;

const Required = styled.span`

  color: #e8753d;
`;

const Input = styled.input`

  box-sizing: border-box;

  width: 220px;

  height: 18px;

  padding: 2px 6px;


  border: none;

  border-bottom: 1px solid #d9c4bb;

  background-color: #f6f3f2;

  font-size: 9px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }
`;

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

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 11px;
`;

const Button = styled.button`

  width: 67px;

  height: 19px;
  border: 1px solid #9c8174;
  border-radius: 2px;


  background-color: #d8bfb3;
  color: #222;

  
  font-size: 9px;
  cursor: pointer;

  &:hover {
    background-color: #cdb0a3;
  }
`;

const KontaktOs: React.FC = () => {
  return (
    <Page>
      <Title>Kontakt os</Title>

      <Form>
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

        <FormGroup>
          <Label htmlFor="besked">
            Din besked <Required>*</Required>
          </Label>

          <Textarea
            id="besked"
            placeholder="Indtast en besked"
          />
        </FormGroup>

        <ButtonContainer>
          <Button type="submit">Send</Button>
          <Button type="button">Annuller</Button>
        </ButtonContainer>
      </Form>
    </Page>
  );
};

export default KontaktOs;