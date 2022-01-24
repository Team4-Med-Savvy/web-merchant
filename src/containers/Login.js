import { Button, Fade, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../utils/appConstant";
import CloseIcon from "@mui/icons-material/Close";

const Login = ({ open, handleClose, setLogin }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  const googleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Fade in={open}>
      <Container>
        <Head>
          <CloseIcon
            style={{
              marginRight: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
        </Head>
        <Intro>Welcome Guest</Intro>

        <Form>
          <InputBox>
            <Input
              id="email"
              label="Email"
              variant="standard"
              autoComplete={false}
            />
            <Input
              id="password"
              label="Password"
              variant="standard"
              type="password"
            />
          </InputBox>
          <Btn variant="contained" type="submit" onClick={submitForm}>
            Login
          </Btn>
          <RuleBox>
            <Hr /> or <Hr />
          </RuleBox>
          <Btn2 variant="contained" onClick={googleLogin}>
            <Img src="/google.png" /> Login with Google
          </Btn2>
          <Register>
            Not registered yet?{" "}
            <Link onClick={() => setLogin(false)}>Click here</Link>
          </Register>
        </Form>
      </Container>
    </Fade>
  );
};

export default Login;

const Container = styled.div`
  background-color: ${colors.modal};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  width: 100%;
  text-align: right;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  height: 75%;
  align-self: center;
`;

const Input = styled(TextField)`
  width: 350px;
`;

const Btn = styled(Button)`
  width: 320px;
`;

const InputBox = styled.div`
  display: flex;
  height: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Hr = styled.hr`
  width: 20%;
  background-color: ${colors.rule};
  height: 1px;
  border: none;
`;

const RuleBox = styled.div`
  display: flex;
  width: 60%;
  height: 2px;
  align-items: center;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`;

const Btn2 = styled.button`
  border: none;
  outline: none;
  width: 320px;
  border-radius: 5px;
  padding: 7px;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #fafafa;
    transition: 0.3s;
  }
`;
const Intro = styled.span`
  font-size: 23px;
`;

const Register = styled.p`
  font-size: 12px;
`;

const Link = styled.span`
  color: ${colors.navbar};
  cursor: pointer;
`;
