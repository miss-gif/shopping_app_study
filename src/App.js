import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Responsive from "./components/common/Responsive";
import CartPage from "./pages/CartPage";
import CreatePage from "./pages/CreatePage";
import ModifyPage from "./pages/ModifyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductItemPage from "./pages/ProductItemPage";
import ProductListPage from "./pages/ProductListPage";
import PurchasePage from "./pages/PurchasePage";

function App() {
  return (
    <Responsive>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductItemPage />} />
          <Route path="/purchase/:productId" element={<PurchasePage />} />
          <Route path="/modify/:productId" element={<ModifyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Responsive>
  );
}

export default App;
