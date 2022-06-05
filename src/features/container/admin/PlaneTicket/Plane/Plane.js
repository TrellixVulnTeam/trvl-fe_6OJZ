import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Popconfirm, Spin, Table, Row, Col } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import {
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import CardAddPlane from "./CardAddPlane";

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
function Plane(props) {
  const match = useRouteMatch();

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
        title: 'Tên máy bay',
        dataIndex:'planeName',
        key: 'PlaneName'
    },
    {
      title: "action",
      key: "action",
      render: (value, record, index) => (
        <div style={{ textAlign: "center", fontSize: "18px", color: "blue" }}>
          <Row justify="center" gutter={10}>
            <Col>
              <Button style={{ color: "blue" }}>
                <EditOutlined />
              </Button>
            </Col>
            <Col>
              <Popconfirm
                placement="top"
                title={"Bạn có muốn xóa không?"}
                onConfirm={() => {}}
                okText="Có"
                cancelText="Không"
              >
                <Button style={{ color: "red" }}>
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();

  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="admin">
      <div className="heading">
        <h4>Máy bay</h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        <div className="add">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            <i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới
          </Button>
        </div>

        <Table bordered columns={columns} dataSource={dataSource} />
      </div>
      <CardAddPlane
         isModalVisible={isModalVisible}
         handleOk={() => {
           setIsModalVisible(false);
         }}
         handleCancel={() => {
           setIsModalVisible(false);
         }}
      />
    </div>
  );
}

Plane.propTypes = {};

export default Plane;
