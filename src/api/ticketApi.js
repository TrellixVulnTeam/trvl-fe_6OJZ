import { message } from "antd";
import axiosClient from "./axiosClient";

class ticketApi {
  PostSearch = (params) => {
    const url = "/ticket";
    return axiosClient
      .post(url, params)
      .then((data) => {})
      .catch((err) => {
        message.error("Có lỗi xảy ra!");
      });
  };
}
// const ticketApi = new ticketApi();
export default ticketApi;
