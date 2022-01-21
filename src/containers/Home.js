import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Intro>
        <Banner />
        <Head>Welcome To Merchant Portal</Head>
        <Mask></Mask>
      </Intro>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 80px;
  width: 100vw;
`;
const Banner = styled.img`
  background-color: #808088;
  height: 60vh;
  width: 100vw;
`;
const Head = styled.div`
  position: absolute;
  font-size: 30px;
  z-index: 2;
  color: aliceblue;
`;

const Intro = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
