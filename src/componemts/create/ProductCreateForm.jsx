import React, { useState } from "react";
import { API_HOST } from "../../api/config";

const ProductCreateForm = () => {
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreate = newProduct => {
    fetch(`${API_HOST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleCreate({
            name,
            explanation,
            price,
          });
        }}
      >
        <input
          type="text"
          placeholder="새 상품 이름 입력"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="새 상품 설명 입력"
          value={explanation}
          onChange={e => setExplanation(e.target.value)}
        />
        <input
          type="number"
          placeholder="새 상품 가격 입력"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <input type="submit" value="상품 생성" />
      </form>
    </>
  );
};

export default ProductCreateForm;
