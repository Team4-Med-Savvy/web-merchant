import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/appConstant";
import { apiProduct } from "../utils/axios";

// const categories = [
//   { url: "", name: "Covid essentials", id: 1 },
//   { url: "", name: "Ayurvedic care", id: 2 },
//   { url: "", name: "Skin care", id: 3 },
//   { url: "", name: "Surgical", id: 4 },
//   { url: "", name: "Personal care", id: 5 },
// ];
const SubNav = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    apiProduct
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((e) => console.log(e));
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      {categories &&
        categories.map((item) => (
          <Item onClick={() => navigate(`/products/${item.name}`)}>
            <Img src={item.image} alt={item.id} />
            <Text>{item.name}</Text>
          </Item>
        ))}
    </Container>
  );
};

export default SubNav;

const Container = styled.div`
  height: 70px;
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
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Text = styled.span``;
