import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  getProductOne,
  modifyProduct,
} from "../api/productModifyApi";
import styled from "@emotion/styled";
import Modal from "./common/Modal";
import useModal from "../hooks/useModal";

const initState = {
  id: "",
  name: "",
  price: 0,
  explanation: "",
};

const Modify = () => {
  const navigate = useNavigate();

  const { productId } = useParams();

  // useModal 커스텀 훅 사용하여 모달 상태와 제어 함수 가져오기
  const { isModalOpen, modalMessage, confirmAction, openModal, closeModal } =
    useModal();

  const [product, setProduct] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  // 입력값이 변경될 때 상태를 업데이트하는 함수
  const handleChange = e => {
    const updateProduct = { ...product, [e.target.name]: e.target.value };
    setProduct(updateProduct);
  };

  // 상품 정보를 수정하는 함수
  const handlePatchProduct = async product => {
    try {
      await modifyProduct(product);
      console.log("수정 완료");
      // 수정 완료 후 모달을 띄움
      openModal({
        message: "수정이 완료되었습니다.",
        onConfirm: () => {
          closeModal();
          navigate(`/product//${productId}`);
        },
      });
    } catch (error) {
      console.log("수정 중 오류 발생", error);
    }
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = async e => {
    e.preventDefault();
    await handlePatchProduct(product);
  };

  // 상품 삭제 확인 모달을 여는 함수
  const handleDelete = () => {
    openModal({
      message: "정말 삭제하시겠습니까?",
      onConfirm: async () => {
        try {
          await deleteProduct(productId);
          closeModal();
          navigate(`/product/`);
        } catch (error) {
          console.log("삭제 중 오류 발생", error);
        }
      },
    });
  };

  // 상품 정보를 가져오는 함수
  const fetchProduct = async id => {
    setIsLoading(true);

    try {
      const response = await getProductOne(id);
      const data = response.data;
      if (data && data.product) {
        setProduct(data.product);
        console.log("상품 조회 완료");
      } else {
        console.log("상품 불러오는데 실패");
      }
    } catch (error) {
      console.log("상품 조회 중 오류 발생", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  if (isLoading) {
    return <h3>상품 정보를 불러오는 중입니다...</h3>;
  }

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
      <button type="button" onClick={handleDelete}>
        상품 삭제하기
      </button>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={closeModal}
        onConfirm={confirmAction}
      />
    </div>
  );
};

export default Modify;

// 스타일드 컴포넌트
const StyleForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
