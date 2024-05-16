import { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onUpdate, onDelete }) => {
  const { id, name, price, explanation } = product;

  const [editName, setEditName] = useState(name);
  const [editExplanation, setEditExplanation] = useState(explanation);
  const [editPrice, setEditPrice] = useState(price);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      <div>{id}</div>
      <div>
        <Link to={`/${id}`}>{name}</Link>
      </div>
      <div>{price}</div>
      <div>{explanation}</div>

      <button type="button" onClick={() => onDelete(id)}>
        삭제하기
      </button>
      <button type="button" onClick={() => setIsEditMode(prev => !prev)}>
        수정하기
      </button>

      {isEditMode && (
        <form
          onSubmit={e => {
            e.preventDefault();

            onUpdate({
              id,
              name: editName,
              price: editPrice,
              explanation: editExplanation,
            });
          }}
        >
          <input
            type="text"
            placeholder="상품 이름"
            value={editName}
            onChange={e => setEditName(e.target.value)}
          />
          <input
            type="text"
            placeholder="상품 설명"
            value={editExplanation}
            onChange={e => setEditExplanation(e.target.value)}
          />
          <input
            type="number"
            placeholder="상품 이름"
            value={editPrice}
            onChange={e => setEditPrice(parseInt(e.target.value, 10))}
          />

          <input type="submit" value="수정완료" />
        </form>
      )}
    </div>
  );
};

export default ProductItem;
