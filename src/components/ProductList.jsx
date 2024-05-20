import { useState, useEffect } from "react";
import { getProductList } from "../api/productApi";
import { useNavigate } from "react-router-dom";
import { API_HOST } from "../api/config";

const ProductList = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProductList()
      .then(response => {
        // console.log(response?.data.products);
        const data = response?.data.products;
        setProductList(data);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h3>상품 목록을 불러오는 중입니다...</h3>;
  }

  return (
    <div>
      <h2>상품 목록 보여주기</h2>
      <div>
        {productList.map(item => (
          <ul key={item.id}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`${API_HOST}/${item.id}`);
              }}
            >
              {item.name}
            </li>
            <li>{item.price}</li>
            <li>{item.explanation}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
