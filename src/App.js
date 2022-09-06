import React, { useState } from "react";
import styled from "styled-components";
import { AiTwotoneEye } from "react-icons/ai";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import Password from "./components/PasswordRequired";
import "./index.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const ValidateEmail = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(email)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
  };
  const ValidatePassword = () => {
    var warn = document.getElementById("password");
    var validPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (validPassword.test(password)) { 
      warn.style.color = "green";
      return true;
    } else {
      warn.style.color = "red";
      return false;
    }
  };
  
  function SubmitButton(){
    var validPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (validPassword.test(password)) {
      return <Button type="button" onClick={ValidatePassword}>Login</Button>
    } else {
      return <Button1 type="button" >Login</Button1>
    };
  };
  function togglePassword() {
    if (!passwordShown) setPasswordShown(true);
    else setPasswordShown(false);
  }
  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOnBlur = () => {
    setPasswordRequired(false);
  };
  const handleOnFocus = () => {
    setPasswordRequired(true);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <MainContainer>
        <Head>
          <h2>Login Page</h2>
        </Head>
        <InputContainer>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <InputContainer>
            <Input
              id="password"
              type={passwordShown ? "text" : "Password"}
              placeholder="Password"
              value={password}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              onFocus={handleOnFocus}
              onClick={ValidateEmail}
              onKeyPress={ValidatePassword}
            />
            <div className="password-icon" onClick={togglePassword}>
              {passwordShown ? <AiTwotoneEye /> : <AiTwotoneEyeInvisible />}
            </div>
          </InputContainer>
        </InputContainer>
        <ButtonContainer>
          <SubmitButton/>
        </ButtonContainer>
      </MainContainer>
      <Ins>{passwordRequired ? <Password /> : null}</Ins>
    </>
  );
}
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: linear-gradient(to right, #14373c 0%, #020b26 79%);
  box-shadow: 0 8px 32px 0 rgba(32, 38, 140, 0.37);
  border-radius: 10px;
  color: #ffffff;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  gap: 5px;
  width: 100%;
  position: relative;
`;
const Head = styled.h3`
  margin: 3rem 0 2 rem;
`;
const Input = styled.input`
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  border: none;
  padding: 1rem;
  font-size: 1 rem;
  font-weight: bold;
  background: rgba(209, 209, 224, 0.15);
  box-shadow: 0 8px 32px 0 rgba(32, 38, 140, 0.37);
  &:focus {
    display: inline-block;
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  width: 80%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  letter-spacing: 0.2rem;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
`;
const Button1 =styled.button`
width: 80%;
height: 3rem;
border: none;
color: white;
border-radius: 2rem;
cursor: pointer;
letter-spacing: 0.2rem;
`;
const Ins = styled.div`
  background-color: white;
  color: red;
  top: 305px;
  position: absolute;
  right: 200px;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
`;

export default App;
