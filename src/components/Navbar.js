import { Backdrop, Modal } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/appConstant";
import Login from "../containers/Login";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, tokenSelector } from "../features/userSlice";

const Navbar = () => {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (!token) {
      setOpen(true);
    } else {
      dispatch(removeUser());
      localStorage.removeItem("token");
    }
  };
  const handleClose = () => setOpen(false);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <Container>
      <Img src="/logo.jpeg" onClick={() => navigate("/")} />

      <Items>
        {/* <Item onClick={() => navigate("/products")}>Products</Item> */}
        <Item onClick={() => navigate("/new")}>New</Item>
        <Item onClick={() => navigate("/profile")}>Profile</Item>
        <Item onClick={() => handleOpen()}>{token ? "Logout" : "Login"}</Item>
      </Items>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {isLogin ? (
          <Login open={open} handleClose={handleClose} setLogin={setLogin} />
        ) : (
          <Signup open={open} handleClose={handleClose} setLogin={setLogin} />
        )}
      </Modal>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 70px;
  background-color: ${colors.navbar};
  display: flex;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 3;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.4;
`;

const Item = styled.div`
  color: ${colors.navbarItem};
  cursor: pointer;
`;
const Img = styled.img`
  background-color: black;
  width: 150px;
  /* height: 100%; */
  margin: 10px;
`;
