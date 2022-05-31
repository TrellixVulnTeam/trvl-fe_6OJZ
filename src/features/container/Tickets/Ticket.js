import React, { useEffect, useState } from "react";
import { DatePicker, Space, Button } from 'antd';

import Select from 'react-select'
import { Link } from "react-router-dom";
import Footer from "../trangchu/footer/Footer";
import "./Ticket.css";
import TableTicket from "./TableTicket";
import Flight from "./Flight/Flight";

const destination = [
    {
        value: 'Hà Nội',
        label: 'Hà Nội'
    },
    {
        value: 'Đà Nẵng',
        label: 'Đà Nẵng'
    },
    {
        value: 'Điện Biên',
        label: 'Điện Biên'
    },
    {
        value: 'Cần Thơ',
        label: 'Cần Thơ'
    },
    {
        value: 'Hải Phòng',
        label: 'Hải Phòng'
    },
    {
        value: 'TP. Hồ Chí Minh',
        label: 'TP. Hồ Chí Minh'
    },

]
const { RangePicker } = DatePicker;
function Ticket() {
    const [size, setSize] = useState('large');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn điểm đi</label>
                    <Select placeholder='Chọn điểm đi...' options={destination}/>
                </div>
                <div className="choose">
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn điểm đến</label>
                    <Select placeholder='Chọn điểm đến...' options={destination}/>
                </div>
                <div className='choose'>
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn ngày</label>
                    <Space direction="vertical" size={14} >
                        <RangePicker style={{width:'320px', height: '39px', borderRadius: '1px'}}/>
                    </Space>
                </div>
                <Button style={{marginTop:'33px', height:'39px', background:'#ee6c18', color: '#fff', width:'150px', textTransform:'uppercase'}}>Search...</Button>
            </div>
        </div>
        <Flight/>
      </div>
      <Footer />
    </div>
  );
}

export default Ticket;
