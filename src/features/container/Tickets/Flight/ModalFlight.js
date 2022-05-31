import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const ModalFlight = (props) => {
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
    <div>
      <Modal
        title="Đặt vé"
        visible={props.isModalVisible}
        onOk={handleOk}
        onCancel={props.handleCancel}
        centered
      >
        
      </Modal>
    </div>
  );
};

export default ModalFlight;
