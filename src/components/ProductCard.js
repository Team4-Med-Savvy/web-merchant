import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/product/${data.id}`)}>
      <Img src={data.url} />
      <Tags>
        <Title>{data.title}</Title>
        <Price>{data.price}</Price>
        <Options>Merchants: {data.options}</Options>
      </Tags>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  min-width: 300px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 10px; */
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-size: 18px;
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Options = styled.span``;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;
