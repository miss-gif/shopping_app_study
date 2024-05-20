import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleMoveHome = () => navigate("/");
  const handleMoveCreate = () => navigate("/create");

  return (
    <>
      <ul>
        <li onClick={handleMoveHome} style={{ cursor: "pointer" }}>
          홈으로
        </li>
        <li onClick={handleMoveCreate} style={{ cursor: "pointer" }}>
          상품 등록하기
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
};

export default Layout;
