import {
  Button,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const ChangeProduct = () => {
  const [category, setCategory] = useState("Covid Essentials");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Container>
      <Box>
        <Text>Product Details</Text>
        <Form>
          <Input label="Product Name" />
          <Input label="Product Stock" type="number" />
          <Input label="Product Price" type="number" />
          <TextareaAutosize
            maxRows={10}
            minRows={5}
            aria-label="maximum height"
            placeholder="Write product description"
            defaultValue=""
            style={{ maxWidth: 400, width: "100%" }}
          />
          <Select
            value={category}
            label="Category"
            onChange={handleChange}
            sx={{ maxWidth: 400, width: "100%" }}
          >
            <MenuItem value={"Covid Essentials"}>Covid Essentials</MenuItem>
            <MenuItem value={"Skin Care"}>Skin Care</MenuItem>
            <MenuItem value={"Ayurvedic"}>Ayurvedic</MenuItem>
            <MenuItem value={"Surgical"}>Surgical</MenuItem>
            <MenuItem value={"Personal Care"}>Personal Care</MenuItem>
          </Select>
          <Button variant="contained">Submit</Button>
        </Form>
      </Box>
    </Container>
  );
};

export default ChangeProduct;

const Container = styled.div`
  padding-top: 80px;
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
