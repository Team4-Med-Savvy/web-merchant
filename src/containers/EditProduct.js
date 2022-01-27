import {
  Button,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { userSelector } from "../features/userSlice";
import { apiMerchant, apiProduct } from "../utils/axios";

const EditProduct = () => {
  const { id } = useParams();
  const user = useSelector(userSelector);
  const [data, setData] = useState(null);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    apiProduct
      .get(`/product/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user != null) {
      apiMerchant
        .post(`/merchant/prod/${id}/${user.id}`, {
          stock: stock,
          price: price,
        })
        .then((res) => {
          alert("Product Added!");
        })
        .catch((e) => console.log(e));
    } else {
      alert("Sign In to add Product!!");
    }
  };
  return (
    <Container>
      {data && (
        <Box>
          <Text>Product Details</Text>
          <Form>
            <Input label="Product Title" disabled value={data.title} />
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
              disabled
              value={data.image}
            />

            <TextareaAutosize
              maxRows={10}
              minRows={5}
              value={data.description}
              disabled
              aria-label="maximum height"
              placeholder="Write product description"
              defaultValue=""
              style={{ maxWidth: 390, width: "100%" }}
            />
            <Input
              label="Category"
              type="text"
              disabled
              value={data.category}
            />

            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Box>
      )}
    </Container>
  );
};

export default EditProduct;

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
