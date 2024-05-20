import styled from "@emotion/styled";
import React, { useState } from "react";
import { createProduct } from "../api/productCreateApi";
import { API_HOST } from "../api/config";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handlePriceChange = e => {
    setPrice(e.target.value);
  };
  const handleExplanationChange = e => {
    setExplanation(e.target.value);
  };

  const handleCreateProduct = async e => {
    e.preventDefault();
    setIsLoading(true);
    const response = await createProduct({ name, price, explanation });
    if (response) {
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  const handleMoveListPage = () => {
    setIsModalOpen(false);
    navigator(`${API_HOST}`);
    return console.log("상품 목록페이지로 이동");
  };

  if (isLoading) {
    return <h3>상품을 등록하는 중입니다.</h3>;
  }

  if (isModalOpen) {
    return (
      <StyleDiv>
        <div>상품을 성공적으로 추가하였습니다.</div>
        <div>확인을 누르면 상품 목록 페이지로 이동합니다.</div>
        <button onClick={handleMoveListPage}>확인</button>
      </StyleDiv>
    );
  }
  return (
    <div>
      <h2>상품 등록하기</h2>
      <StyledForm onSubmit={handleCreateProduct}>
        <input
          type="text"
          placeholder="상품 이름"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="number"
          placeholder="상품 가격"
          value={price}
          onChange={handlePriceChange}
        />
        <br />
        <textarea
          rows={4}
          type="text"
          placeholder="상품 설명"
          value={explanation}
          onChange={handleExplanationChange}
        />
        <br />
        <input type="submit" value="상품 정보 등록하기" />
      </StyledForm>
    </div>
  );
};

export default Create;

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
