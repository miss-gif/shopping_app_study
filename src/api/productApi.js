import axios from "axios";
import { API_HOST } from "./config";

export const getProductList = async () => {
  try {
    const response = await axios.get(`${API_HOST}`);
    if (response.status === 200) {
      console.log("상품 목록 불러오기 성공");
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
