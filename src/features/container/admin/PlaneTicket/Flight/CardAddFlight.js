import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  TimePicker,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { RangeTimePicker } = TimePicker;
const destinations = [
  {
    value: "Hà Nội",
    label: "Hà Nội",
  },
  {
    value: "Đà Nẵng",
    label: "Đà Nẵng",
  },
  {
    value: "Điện Biên",
    label: "Điện Biên",
  },
  {
    value: "Cần Thơ",
    label: "Cần Thơ",
  },
  {
    value: "Hải Phòng",
    label: "Hải Phòng",
  },
  {
    value: "TP. Hồ Chí Minh",
    label: "TP. Hồ Chí Minh",
  },
];

const CardAddFlight = (props) => {
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
    <>
      <Modal
        title="Thêm chuyến bay"
        visible={props.isModalVisible}
        onCancel={props.handleCancel}
        centered
        onOk={handleOk}
      >
        <Row justify="start" className="Style">
          <Col xs={8} md={6}>
            <span>Plane Name:</span>
          </Col>
          <Col xs={16} md={18}>
            <Select style={{ width: "355px" }}/>
          </Col>
        </Row>
        <Row justify="start" className="Style">
          <Col xs={8} md={6}>
            <span>Flight Name:</span>
          </Col>
          <Col xs={16} md={18}>
            <Input style={{ width: "100%" }} placeholder="Flight Name..." />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={8} md={6}>
            <label>Chọn điểm đi</label>
          </Col>
          <Col xs={8} md={6}>
            <Select
              placeholder="Chọn điểm đi..."
              options={destinations}
              style={{ width: "355px" }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={8} md={6}>
            <label>Chọn điểm đến</label>
          </Col>
          <Col xs={8} md={6}>
            <Select
              placeholder="Chọn điểm đến..."
              options={destinations}
              style={{ width: "355px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={8} md={6}>
            <label>Giá</label>
          </Col>
        </Row>
        <Row >
          <Col xs={8} md={6}>
            <label>Chọn ngày</label>
          </Col>
          <Col xs={8} md={6}>
            <Space direction="vertical" size={14}>
              <RangePicker
                style={{ width: "355px", borderRadius: "1px" }}
              />
            </Space>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }} >
          <Col xs={8} md={6}>
            <label>Thời gian đi</label>
          </Col>
          <Col xs={8} md={6}>
              <TimePicker placeholder="Thời gian đi..." style={{ width: "355px", borderRadius: "1px" }}/>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={8} md={6}>
            <label>Thời gian đến</label>
          </Col>
          <Col xs={8} md={6}>
              <TimePicker placeholder="Thời gian đến..." style={{ width: "355px", borderRadius: "1px" }}/>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CardAddFlight;
