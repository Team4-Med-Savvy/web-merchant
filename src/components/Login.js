import { Fade } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { colors } from "../utils/appConstant";

const Login = ({ open }) => {
  return (
    <Fade in={open}>
      <Container>Login</Container>
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
`;
