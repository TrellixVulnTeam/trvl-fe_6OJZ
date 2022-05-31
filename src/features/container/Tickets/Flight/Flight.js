import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import "./Flight.css";

import { useState } from "react";
import { Modal, Button, Table, Space } from "antd";
import ModalFlight from "./ModalFlight";

const dataSource = [
  {
    key: 1,
    logo: (
      <img
        src="https://static.wixstatic.com/media/9d8ed5_a3d60d721cfc4d0fac1d5b4919d1e035~mv2.jpg/v1/fill/w_1000,h_626,al_c,q_90,usm_0.66_1.00_0.01/9d8ed5_a3d60d721cfc4d0fac1d5b4919d1e035~mv2.jpg"
        alt="logo-brand"
        width="80px"
      />
    ),
    brand: "VietNam Airline",
    flight: "VNU123",
    time: "09:10 - 11:25",
    price: 1500000,
  },
  {
    key: 2,
    logo: (
      <img
        src="https://inkythuatso.com/uploads/images/2021/09/logo-bamboo-airways-inkythuatso-13-16-26-24.jpg"
        alt="logo-brand"
        width="80px"
      />
    ),
    brand: "BamBoo",
    flight: "BB210",
    time: "09:10 - 11:25",
    price: 3200000,
  },
  {
    key: 3,
    logo: (
      <img
        src="https://static.wixstatic.com/media/9d8ed5_ed0de8277dc44e17a5cb83189ed732f1~mv2.png/v1/fill/w_1339,h_837,al_c/9d8ed5_ed0de8277dc44e17a5cb83189ed732f1~mv2.png"
        alt="logo-brand"
        width="80px"
      />
    ),
    brand: "VietJet",
    flight: "VJU123",
    time: "09:10 - 11:25",
    price: 1250000,
  },
  {
    key: 4,
    logo: (
      <img
        src="https://download.logo.wine/logo/Jetstar_Airways/Jetstar_Airways-Logo.wine.png"
        alt="logo-brand"
        width="80px"
      />
    ),
    brand: "JetStart",
    flight: "VNU123",
    time: "09:10 - 11:25",
    price: 2200000,
  },
];

const columns = [
  {
    title: "",
    dataIndex: "logo",
    key: "logo",
    with: "8%",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    width: "20%",
    filters: [
      {
        text: "VietNam Airline",
        value: "VietNam Airline",
      },
      {
        text: "BamBoo",
        value: "BamBoo",
      },
      {
        text: "JetStar",
        value: "JetStar",
      },
      {
        text: "VietJet",
        value: "VietJet",
      },
    ],
    onFilter: (value, record) => record.brand.indexOf(value) === 0,
  },
  {
    title: "Chuyến bay",
    dataIndex: "flight",
    key: "flight",
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Button
        // onClick={showModal}
      >
        Đặt vé
      </Button>
    ),
  },
];

function Flight() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="wrapper">
      <h5>Kết quả tìm kiếm</h5>
      <Table columns={columns} dataSource={dataSource} />
     
      {isModalVisible && (
        <ModalFlight
          isModalVisible={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default Flight;
