import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Order = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/edit/${data.productId}`)}>
      <Img alt="product image" src={data.image} />
      <Info>
        <Text>{data.title}</Text>
        <Text>{data.productId}</Text>
        <Text>Stock - {data.stock}</Text>
      </Info>
      <Total>
        <Text>Price</Text>
        <Text>{data.price}</Text>
      </Total>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  display: flex;
  min-height: 150px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  margin: 20px 0;
  padding: 20px;
  /* cursor: pointer; */
`;

const Img = styled.img`
  flex: 0.3;
  max-width: 30%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Total = styled.div`
  display: flex;
`;
const Text = styled.span`
  margin: 20px;
  font-size: 18px;
`;
