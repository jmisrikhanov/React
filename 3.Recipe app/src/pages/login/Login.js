import React from "react";
import {
  Header,
  FormContainer,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
import mealSvg from "../../assets/meal2.svg";
import { useHistory } from "react-router";

const Login = ({ isAuth, setIsAuth }) => {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(!isAuth);
    history.push("/");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} alt="meal" />
        <Header> Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
