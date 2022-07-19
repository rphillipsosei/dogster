import React from "react";
import styled from "styled-components";

function Register() {
  return (
    <RegisterContainer>
      <h1>Register</h1>

      <Form>
        <Label>Username</Label>
        <Inputs />
        <Label>Email</Label>
        <Inputs />
        <Label>Password</Label>
        <Inputs />
      </Form>
      <RegisterButton>GO</RegisterButton>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled.div`
  background-color: teal;
  height: 620px;
  width: 600px;
  border: 5px solid black;
  border-radius: 10px;
  background-image: url("https://www.transparenttextures.com/patterns/sprinkles.png");
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  flex-direction: column;
  position: relative;
  top: 25%;
  left: 35%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Label = styled.label`
  font-size: 25px;
`;

const Inputs = styled.input`
  height: 40px;
  width: 400px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const RegisterButton = styled.button`
  width: 100px;
  height: 45px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: teal;
  color: white;
  border: 3px solid white;
`;
