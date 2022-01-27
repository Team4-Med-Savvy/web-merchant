import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/appConstant";

const categories = [
  { url: "", name: "Covid essentials", id: 1 },
  { url: "", name: "Ayurvedic Care", id: 2 },
  { url: "", name: "Skin Care", id: 3 },
  { url: "", name: "Surgical", id: 4 },
  { url: "", name: "Personal Care", id: 5 },
];
const SubNav = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {categories.map((item) => (
        <Item onClick={() => navigate(`/products/${item.name}`)}>
          <Img src={item.url} alt={item.id} />
          <Text>{item.name}</Text>
        </Item>
      ))}
    </Container>
  );
};

export default SubNav;

const Container = styled.div`
  height: 60px;
  background-color: ${colors.navbarItem};
  display: flex;
  color: ${colors.rule};
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  padding-top: 80px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 40px;
  width: 40px;
`;

const Text = styled.span``;
