import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductCreatePage from "./pages/ProductCreatePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="create" element={<ProductCreatePage />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
