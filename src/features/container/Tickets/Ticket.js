import React, { useEffect, useState } from "react";
import { DatePicker, Space, Button, List } from 'antd';

import Select from 'react-select'
import { Link } from "react-router-dom";
import Footer from "../trangchu/footer/Footer";
import "./Ticket.css";
import TableTicket from "./TableTicket";
import Flight from "./Flight/Flight";
import axios from 'axios';
import axiosClient from "../../../api/axiosClient";

// const destination = [
//     {
//         value: 'Hà Nội',
//         label: 'Hà Nội'
//     },
//     {
//         value: 'Đà Nẵng',
//         label: 'Đà Nẵng'
//     },
//     {
//         value: 'Điện Biên',
//         label: 'Điện Biên'
//     },
//     {
//         value: 'Cần Thơ',
//         label: 'Cần Thơ'
//     },
//     {
//         value: 'Hải Phòng',
//         label: 'Hải Phòng'
//     },
//     {
//         value: 'TP. Hồ Chí Minh',
//         label: 'TP. Hồ Chí Minh'
//     }
// ]
const { RangePicker } = DatePicker;
function Ticket() {
    const [size, setSize] = useState('large');
    const [destination, setDestination] = useState([]);
    
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

    const SearchTicket = async() => {
      //Check input value here


      //Call API
      const result = await axiosClient.post('/search', {
        "from_id": -1,
        "to_id": -1,
        "start_date": "DD/MM/YYYY",
        "to_date": "DD/MM/YYYY",
      });

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
                <Button style={{marginTop:'33px', height:'39px', background:'#ee6c18', color: '#fff', width:'150px', textTransform:'uppercase'}} onClick={SearchTicket}>Search...</Button>
            </div>
        </div>
        <Flight/>
      </div>
      <Footer />
    </div>
  );
}

export default Ticket;
