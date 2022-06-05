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
 
  
  const CardAddPlane = (props) => {
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
          title="Thêm máy bay"
          visible={props.isModalVisible}
          onCancel={props.handleCancel}
          centered
          onOk={handleOk}
        >
          <Row justify="start" className="Style">
            <Col xs={8} md={6}>
              <span>Brand Name:</span>
            </Col>
            <Col xs={16} md={18}>
              <Select style={{ width: "355px" }}/>
            </Col>
          </Row>
          <Row style={{marginTop: '10px'}}>
            <Col xs={8} md={6}>
              <span>Plane Name:</span>
            </Col>
            <Col xs={16} md={18}>
              <Input style={{ width: "100%" }} placeholder="Flight Name..." />
            </Col>
          </Row>
         
        </Modal>
      </>
    );
  };
  
  export default CardAddPlane;
  