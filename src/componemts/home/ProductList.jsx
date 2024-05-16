import { useState, useEffect } from "react";
import { API_HOST } from "../../api/config";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const handleUpdate = updateProduct => {
    fetch(`${API_HOST}/${updateProduct.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateProduct),
    }).then(response => {
      if (response.ok) {
        setProducts(
          products.map(product =>
            product.id === updateProduct.id ? updateProduct : product,
          ),
        );
      }
    });
  };

  const handleDelete = id => {
    fetch(`${API_HOST}/${id}`, {
      method: "DELETE",
    }).then(response => {
      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
      }
    });
  };

  useEffect(() => {
    fetch(`${API_HOST}`)
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default ProductList;
