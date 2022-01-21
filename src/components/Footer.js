import React from "react";
import styled from "styled-components";
import { colors } from "../utils/appConstant";

const Footer = () => {
  return (
    <Container>
      <Cover>
        <Panel>
          <Head>Med Savvy</Head>
          <List>A Medical Care and delivery solution.</List>
        </Panel>
        <Panel>
          <Head>Links</Head>
          <List>Home</List>
          <List>Products</List>
          <List>Profile</List>
        </Panel>
        <Panel>
          <Head>Contact</Head>
          <List>Gmail</List>
          <List>Github</List>
          <List>FB</List>
        </Panel>
      </Cover>
      <List>Copyright @MedSavvy 2022</List>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${colors.footer};
  width: 100%;
  height: 25vh;
  /* align-items: center; */
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const Cover = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: 0.33;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
const List = styled.div`
  font-size: 15px;
  align-self: center;
`;
