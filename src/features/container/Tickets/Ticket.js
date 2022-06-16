import React, { useEffect, useState } from "react";
import { DatePicker, Space, Button, List } from 'antd';
import { Modal,Table } from "antd";
import Select from 'react-select'
import { Link } from "react-router-dom";
import Footer from "../trangchu/footer/Footer";
import "./Ticket.css";
import ModalFlight from "./ModalFlight";
import axios from 'axios';
import axiosClient from "../../../api/axiosClient";
import moment from "moment";

//RangePicker Doc: https://ant.design/components/date-picker/#RangePicker

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
    price: '1.500.000',
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
    price: '3.200.000',
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
    price: '1.250.000',
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
    price: '2.200.000',
  },
];

const { RangePicker } = DatePicker;
function Ticket() {
    const [size, setSize] = useState('large');
    const [destination, setDestination] = useState([]);
    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [showResult, setShowResult] = useState(true)
    const [dataTable, setdataTable] = useState([])
    const [isSubmit, setIsSubmit] = useState(false);
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
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            Đặt vé
          </Button>
        ),
      },
    ];
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
    const GetAllLocation = async () => {
      const result = await axiosClient.get('/diadiems');
      let ListLocation = [];
      for (const i of result.data) {
        ListLocation.push({
          value: i.id,
          label: i.name
        });
      }
      setDestination(ListLocation);
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const ChangeFromLocation = (e) => {
      console.log(e);
      setFromLocation(e)
    }

    const ChangeToLocation = (e) => {
      console.log(e);
      setToLocation(e)
    }

    const ChangeDate = (date, dateString) => {
      setDateRange(date);
    }

    const SearchTicket = async() => {
      //Check input value here
      if (fromLocation === null) {
        alert("Chon diem di");
        return;
      }

      if (toLocation === null) {
        alert("Chon diem den");
        return;
      }

      if (dateRange[0] === null) {
        alert("Chon ngay di");
        return;
      }

      //Call API
      /**
       * @params
       * from_id (required): id dia diem khoi hanh
       * to_id (required): id dia diem den
       * start_date (required): thoi gian bat dau (DD/MM/YYYY)
       * to_date (optionals): thoi gian quay ve (khu hoi - DD/MM/YYYY)
       */
      let reqData = {
        "from_id": fromLocation.value,
        "to_id": toLocation.value,
        "start_date": moment(dateRange[0]).format("DD/MM/YYYY")
      };
      if (dateRange[1] != null) {
        reqData.to_date = moment(dateRange[1]).format("DD/MM/YYYY")
      }
      const result = await axiosClient.post('/ticket/search', reqData);
      console.log(result);
      //Handle data from API here
    }

  useEffect(() => {
    GetAllLocation();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="ticket">
      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home mr-2"></i>Trang chủ /
              </Link>
            </li>
            <li className="breadcru mb-item"> Vé máy bay</li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="form-search">
            <div className='choose-destination'>
                <div className="choose">
                    <label style={{fontSize: '16px'}}>Chọn nơi khởi hành</label>
                    <Select value={fromLocation} onChange={ChangeFromLocation} placeholder='Chọn điểm đi...' options={destination}/>
                </div>
                <div className="choose">
                    <label style={{fontSize: '16px'}}>Chọn nơi đến</label>
                    <Select value={toLocation} onChange={ChangeToLocation} placeholder='Chọn điểm đến...' options={destination}/>
                </div>
                <div className='choose'>
                    <label style={{fontSize: '16px'}}>Chọn ngày</label>
                    <Space direction="vertical" size={14} >
                        <RangePicker value={dateRange} onCalendarChange={ChangeDate} style={{width:'320px', height: '39px', borderRadius: '1px'}}/>
                    </Space>
                </div>
                <Button style={{marginTop:'33px', height:'39px', background:'#ee6c18', color: '#fff', width:'150px', textTransform:'uppercase'}} onClick={SearchTicket}>Search...</Button>
            </div>
        </div>
        <div className="wrapper">
        <h5>Kết quả tìm kiếm</h5>
        <Table columns={columns} dataSource={dataSource} />
      </div>

      {isModalVisible && (
        <ModalFlight
          isModalVisible={isModalVisible}
          handleOk={() => {
            setIsModalVisible(false);
          }}
          handleCancel={() => {
            setIsModalVisible(false);
          }}
        />
      )}
      </div>
      <Footer />
    </div>
  );
}

export default Ticket;