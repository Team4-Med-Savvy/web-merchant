import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { apiProduct } from "../utils/axios";

const Product = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    apiProduct
      .get(`/product/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Container>
      {data && (
        <>
          <Img alt="Product Image" src={data.image} />
          <Info>
            <Head>
              <Left>
                <Title>{data.title}</Title>
                <Price>Rs. {data.price}</Price>
              </Left>
              <Right>
                <Price>Want to sell this Product?</Price>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/edit/${data.id}`)}
                >
                  Become a Seller
                </Button>
              </Right>
            </Head>
            <Desc>{data.description}</Desc>
          </Info>
        </>
      )}
    </Container>
  );
};

export default Product;

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Img = styled.img`
  flex: 0.4;
  width: 40%;
  height: 100%;
  margin: 20px;
`;
const Info = styled.div`
  flex: 0.6;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Price = styled.h2`
  font-weight: 500;
  font-size: 22;
`;

// const Quantity = styled.span``;
// const Count = styled.span`
//   margin: 0 30px;
// `;

const Desc = styled.p`
  max-width: 80%;
  text-align: justify;
`;
