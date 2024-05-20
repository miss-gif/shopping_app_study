import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import CreatePage from "./pages/CreatePage";
import ModifyPage from "./pages/ModifyPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductListPage from "./pages/ProductListPage";
import ProductItemPage from "./pages/ProductItemPage";
import PurchasePage from "./pages/PurchasePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/product/:productId" element={<ProductItemPage />} />
        <Route path="/purchase/:productId" element={<PurchasePage />} />
        <Route path="/modify/:productId" element={<ModifyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
