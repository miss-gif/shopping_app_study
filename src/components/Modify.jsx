import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  getProductOne,
  modifyProduct,
} from "../api/productModifyApi";
import styled from "@emotion/styled";

const initState = {
  id: "",
  name: "",
  price: 0,
  explanation: "",
};

const Modify = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState(initState);

  const handleChange = e => {
    const updateProduct = { ...product, [e.target.name]: e.target.value };
    setProduct(updateProduct);
  };

  const handlePatchProduct = () => {
    modifyProduct(product);
    console.log("삭제완료");
    navigate(`/product/${productId}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handlePatchProduct(product);
    console.log("수정 완료");
    navigate(`/product/${product}`);
  };

  const handleDelete = productId => {
    deleteProduct(productId);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductOne(productId);
        if (data) {
          // console.log(data.data.product);
          setProduct(data.data.product);
        } else {
          console.log("상품 불러오는데 실패");
          return;
        }
      } catch (error) {
        console.log(error, "서버 오류");
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h2>상품 수정하기</h2>
      <StyleForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={e => handleChange(e)}
        />
        <br />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={e => handleChange(e)}
        />
        <br />
        <textarea
          type="text"
          rows={4}
          name="explanation"
          value={product.explanation}
          onChange={e => handleChange(e)}
        />
        <br />
        <input type="submit" value="상품 수정하기" />
      </StyleForm>
      <button onClick={handleDelete}>상품 삭제하기</button>
    </div>
  );
};

export default Modify;

const StyleForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
