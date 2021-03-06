import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { apiProduct } from "../utils/axios";
const cards = [
  { id: 1, title: "Hello", price: "world", options: 3, url: "" },
  { id: 2, title: "Hello", price: "world", options: 2, url: "" },
  { id: 3, title: "Hello", price: "world", options: 1, url: "" },
  { id: 4, title: "Hello", price: "world", options: 1, url: "" },
  { id: 5, title: "Hello", price: "world", options: 1, url: "" },
  { id: 6, title: "Hello", price: "world", options: 1, url: "" },
  { id: 7, title: "Hello", price: "world", options: 1, url: "" },
];

const Home = () => {
  const [recommend, setRecommend] = useState(null);
  useEffect(() => {
    apiProduct
      .get("/product/recommend")
      .then((res) => setRecommend(res.data))
      .catch((e) => console.log(e));
    console.log(recommend);
  }, []);
  const scrollRef = useRef(null);
  return (
    <Container>
      <Intro>
        <Banner src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80" />
        <Head>Welcome To Merchant Portal</Head>
        <Mask />
      </Intro>
      <Recom>
        <Text>
          <span>Recommendation</span>
          <span>
            <IconButton onClick={() => (scrollRef.current.scrollLeft -= 350)}>
              <ChevronLeftIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton onClick={() => (scrollRef.current.scrollLeft += 350)}>
              <ChevronRightIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </span>
        </Text>
        <List ref={scrollRef}>
          {recommend &&
            recommend.map((card) => {
              return <ProductCard data={card} />;
            })}
        </List>
      </Recom>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* padding-top: 80px; */
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Recom = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const List = styled.div`
  display: flex;
  overflow: scroll;
  padding-left: 30px;
  scroll-behavior: smooth;
`;
const Text = styled.h2`
  font-weight: 400;
  margin-top: 30px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
