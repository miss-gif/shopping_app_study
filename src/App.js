import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "스타벅스 기프티콘",
      explanation:
        "교환유효기간은 93일 입니다. (시즌성 상품, 기업경품(B2B), 할인상품의 경우 유효기간이 상이 할 수 있습니다.)",
      price: 10000,
    },
  ]);
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);

  // console.log(products);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("상품 등록");
        }}
      >
        <input
          type="text"
          placeholder="상품 이름"
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="상품 설명"
          onChange={e => {
            setExplanation(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="상품 가격"
          onChange={e => {
            setPrice(parseInt(e.target.value, 10));
          }}
        />
        <input type="submit" value="상품 등록하기" />
      </form>

      {products.map(product => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.explanation}</div>
        </div>
      ))}
    </>
  );
}

export default App;
