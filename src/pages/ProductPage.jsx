import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/product/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data.product));
  }, []);

  return (
    <div>
      <h1>상품 상세보기 페이지</h1>
      <div>{product?.name}</div>
      <div>{product?.explanation}</div>
      <div>{product?.price}</div>
    </div>
  );
};

export default ProductPage;
