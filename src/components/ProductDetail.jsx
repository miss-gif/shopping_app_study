import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductOne } from "../api/productItemApi";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleMoveModifyPage = () => {
    if (productId) {
      navigate(`/modify/${productId}`);
    }
  };
  const handleMovePurchasePage = () => {
    if (productId) {
      navigate(`/purchase/${productId}`);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    if (productId) {
      getProductOne(productId)
        .then(response => {
          const data = response?.data.product;
          setProduct(data);
          // console.log(data);
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [productId]);

  if (isLoading) {
    return <h3>해당 상품 정보를 불러오는중입니다...</h3>;
  }

  if (!product) {
    return <h3>찾으시는 상품이 없습니다.</h3>;
  }

  return (
    <div>
      <h2>상품 상세보기</h2>
      <div>{product.name}</div>
      <div>{product.price.toLocaleString("KO-kr")}원</div>
      <div>{product.explanation}</div>

      <button type="button" onClick={handleMoveModifyPage}>
        상품 수정하기
      </button>
      <button type="button" onClick={handleMovePurchasePage}>
        상품 구매하기
      </button>
    </div>
  );
};

export default ProductDetail;
