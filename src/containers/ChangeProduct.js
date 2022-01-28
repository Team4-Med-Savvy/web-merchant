import {
  Button,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userSelector } from "../features/userSlice";
import { apiProduct } from "../utils/axios";

const ChangeProduct = () => {
  const user = useSelector(userSelector);
  const [category, setCategory] = useState("Covid essentials");
  const [title, setTitle] = useState(null);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState(null);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      apiProduct
        .post("/product", {
          title: title,
          stock: stock,
          price: price,
          image: image,
          description: desc,
          category: category,
          merchantId: user.id,
        })
        .then((res) => {
          setTitle("");
          setStock(0);
          setPrice(0);
          setImage("");
          setDesc("");
          alert("Product Added!");
        })
        .catch((e) => console.log(e));
    } else {
      alert("Sign In to add Product!!");
    }
  };
  return (
    <Container>
      <Box>
        <Text>Product Details</Text>
        <Form>
          <Input
            label="Product Title"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
          />
          <Input
            label="Product Stock"
            type="number"
            value={stock}
            onInput={(e) => setStock(e.target.value)}
          />
          <Input
            label="Product Price"
            type="number"
            value={price}
            onInput={(e) => setPrice(e.target.value)}
          />
          <Input
            label="Product Image"
            type="text"
            value={image}
            onInput={(e) => setImage(e.target.value)}
          />

          <TextareaAutosize
            maxRows={10}
            minRows={5}
            value={desc}
            aria-label="maximum height"
            placeholder="Write product description"
            defaultValue=""
            style={{ maxWidth: 390, width: "100%" }}
            onInput={(e) => setDesc(e.target.value)}
          />
          <Select
            value={category}
            label="Category"
            onChange={handleChange}
            sx={{ maxWidth: 400, width: "100%" }}
          >
            <MenuItem value={"Covid essentials"}>Covid Essentials</MenuItem>
            <MenuItem value={"Skin care"}>Skin Care</MenuItem>
            <MenuItem value={"Ayurvedic care"}>Ayurvedic</MenuItem>
            <MenuItem value={"Surgical"}>Surgical</MenuItem>
            <MenuItem value={"Personal care"}>Personal Care</MenuItem>
          </Select>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

export default ChangeProduct;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Box = styled.div`
  height: 70vh;
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 400px;
  justify-content: space-evenly;
  align-items: center;
`;
const Input = styled(TextField)`
  max-width: 400px;
  width: 100%;
`;

const Text = styled.h3`
  font-weight: 500;
  margin-top: 30px;
`;
