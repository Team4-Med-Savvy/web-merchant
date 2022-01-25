import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const cart = {
  products: ["1", "3"],
};
const Product = () => {
  const { id } = useParams();
  return (
    <Container>
      <Img
        alt="Product Image"
        src="https://images.unsplash.com/photo-1642948816628-9b457871592d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />
      <Info>
        <Head>
          <Left>
            <Title>Hello</Title>
            <Price>World</Price>
          </Left>
          <Right>
            <Price>Want to sell this Product?</Price>
            <Button variant="outlined">Become a Seller</Button>
          </Right>
        </Head>

        {!cart.products.includes(id) ? (
          <Button variant="contained">Add to Cart</Button>
        ) : (
          <Quantity>
            <span>Quantity</span>
            <Count>3</Count>
            <Button variant="contained" sx={{ margin: "0 10px" }}>
              Inc
            </Button>
            <Button variant="contained" sx={{ margin: "0 10px" }}>
              Dec
            </Button>
          </Quantity>
        )}

        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut diam
          et dolor malesuada placerat id quis ex. Vestibulum dignissim neque eu
          risus ultrices pretium. Donec quis nulla sit amet lacus ornare
          pulvinar. Pellentesque ullamcorper lacus id neque pharetra, ac semper
          quam suscipit. Phasellus id quam vel lacus ullamcorper fringilla. Nunc
          vel tempus lacus. Proin molestie dignissim nunc vitae volutpat. Nam
          tempus, libero eget posuere gravida, nisl nibh facilisis purus, eget
          eleifend nunc felis sit amet dui. Sed accumsan ligula ac velit aliquet
          tempor. Vestibulum quis condimentum est. Sed sollicitudin dolor quis
          nulla fringilla consequat. Pellentesque nunc libero, ullamcorper non
          elit quis, viverra tristique lacus. Cras ullamcorper feugiat arcu, a
          molestie lorem rutrum non. Vivamus nec tincidunt magna. Donec et erat
          dui. Nunc nec leo et lacus lobortis aliquam. Cras quis nisi gravida,
          varius ipsum nec, eleifend ex. Suspendisse et quam ac purus cursus
          elementum quis vel dui. Pellentesque rhoncus blandit turpis.
          Pellentesque vitae risus in turpis porttitor pharetra. Etiam auctor
          erat et elementum efficitur. Pellentesque quis ultricies lectus. Duis
          mattis efficitur leo, vitae suscipit lorem condimentum nec. Donec
          hendrerit hendrerit sapien id pellentesque. Nulla viverra malesuada
          leo, sed facilisis dolor elementum id.
        </Desc>
      </Info>
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
  padding-top: 80px;
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

const Quantity = styled.span``;
const Count = styled.span`
  margin: 0 30px;
`;

const Desc = styled.p`
  max-width: 80%;
  text-align: justify;
`;
