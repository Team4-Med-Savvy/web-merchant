import { Button, Fade, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../utils/appConstant";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../utils/axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../features/userSlice";

const Signup = ({ open, handleClose, setLogin }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;

    if (name) {
      if (email && re.test(email)) {
        if (pass && pass.length > 7) {
          api
            .post("/user/register", {
              name: name,
              email: email,
              password: pass,
              merchant: true,
              points: 1000,
            })
            .then(() =>
              api
                .post("/user/authenticate", { username: email, password: pass })
                .then((res) => {
                  dispatch(setUser(res.data));
                  dispatch(setToken(res.data.token));
                  handleClose();
                })
                .catch((err) => alert("Invalid User/Password"))
            )
            .catch(() => alert("Error Creating User"));
        }
      }
    }
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
        <Intro>Join Us</Intro>
        <Form>
          <InputBox>
            <Input
              id="name"
              label="Full Name"
              variant="standard"
              autoComplete={false}
              onInput={(e) => setName(e.target.value)}
            />
            <Input
              id="email"
              label="Email"
              variant="standard"
              type="email"
              autoComplete={false}
              onInput={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Password"
              variant="standard"
              type="password"
              onInput={(e) => setPass(e.target.value)}
            />
          </InputBox>
          <Btn variant="contained" type="submit" onClick={submitForm}>
            Register
          </Btn>
          <RuleBox>
            <Hr /> or <Hr />
          </RuleBox>
          <Btn2 variant="contained" onClick={googleLogin}>
            <Img src="/google.png" /> Login with Google
          </Btn2>
          <Register>
            Already Registered?
            <Link onClick={() => setLogin(true)}> Click here</Link>
          </Register>
        </Form>
      </Container>
    </Fade>
  );
};

export default Signup;
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
  height: 90%;
`;

const Intro = styled.span`
  font-size: 23px;
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

const Register = styled.p`
  font-size: 12px;
`;

const Link = styled.span`
  color: ${colors.navbar};
  cursor: pointer;
`;
