import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
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
const Products = () => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    apiProduct
      .get(`/product/findlist/${id}`)
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <Container>
      <Head>All Products</Head>
      <All>
        {products &&
          products.map((card) => {
            return <ProductCard data={card} />;
          })}
      </All>
    </Container>
  );
};

export default Products;

const Container = styled.div`
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
