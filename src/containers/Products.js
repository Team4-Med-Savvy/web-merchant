import React from "react";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const cards = [
  { id: 1, title: "Hello", price: "world", options: 3, url: "" },
  { id: 2, title: "Hello", price: "world", options: 2, url: "" },
  { id: 3, title: "Hello", price: "world", options: 1, url: "" },
  { id: 4, title: "Hello", price: "world", options: 1, url: "" },
  { id: 5, title: "Hello", price: "world", options: 1, url: "" },
  { id: 6, title: "Hello", price: "world", options: 1, url: "" },
  { id: 7, title: "Hello", price: "world", options: 1, url: "" },
];
const Products = () => {
  return (
    <Container>
      <Head>All Products</Head>
      <All>
        {cards.map((card) => {
          return <ProductCard data={card} />;
        })}
      </All>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Head = styled.h1`
  font-weight: 400;
  max-width: 1300px;
`;

const All = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
