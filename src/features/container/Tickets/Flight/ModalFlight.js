import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

const ModalFlight = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState({
    listdate: "",
    name: "",
    email: "",
    sdt: "",
    diachi: "",
    nguoilon: 1,
    treem: 0,
    embe: 0,
    dieukhoan: false,
    valueDate: "",
    date: "",
    loadlaihoadon: 1,
  });

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
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        centered
      >
        <h5>Thông tin liên lạc</h5>
        <div className="form-group">
          <label htmlFor="">Họ tên(*)</label>
          <input
            type="text"
            className="form-control"
            name="name"
            disabled
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email(*)</label>
          <input
            type="email"
            className="form-control"
            name="email"
            disabled
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Số điện thoại(*)</label>
          <input
            type="text"
            className="form-control"
            name="sdt"
            disabled
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            name="diachi"
            disabled
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ngày đi</label>
          <input
            type="text"
            className="form-control"
            name="diachi"
            disabled
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <h5 className="text-center text-primary">Số người</h5>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Người lớn</label>
              <input
                type="number"
                className="form-control"
                name="nguoilon"
                min="1"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Trẻ em</label>
              <input
                type="number"
                className="form-control"
                name="treem"
                min="0"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Em bé</label>
              <input
                type="number"
                className="form-control"
                min="0"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Tổng</label>
              <input
                type="number"
                disabled
                className="form-control"
                name="tong"
                // value={tong}
                aria-describedby="helpId"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <h5 className="text-center text-primary">Thành tiền</h5>
        {/* {tour_ngay.map((ok) => (
          <p key={ok.id}>
            Số tiền cần phải trả:{" "}
            <strong className="text-danger">
              {thanhtien(ok.giatreem, ok.giaembe).toLocaleString()}
            </strong>
          </p>
        ))} */}
      </Modal>
    </div>
  );
};

export default ModalFlight;
