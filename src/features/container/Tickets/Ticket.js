import React, { useEffect, useState } from "react";
import { DatePicker, Space, Button, List } from 'antd';

import Select from 'react-select'
import { Link } from "react-router-dom";
import Footer from "../trangchu/footer/Footer";
import "./Ticket.css";

import Flight from "./Flight/Flight";
import axios from 'axios';
import axiosClient from "../../../api/axiosClient";
import moment from "moment";

//RangePicker Doc: https://ant.design/components/date-picker/#RangePicker

const { RangePicker } = DatePicker;
function Ticket() {
    const [size, setSize] = useState('large');
    const [destination, setDestination] = useState([]);
    const [fromLocation, setFromLocation] = useState(null);
    const [toLocation, setToLocation] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    
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
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn điểm đi</label>
                    <Select value={fromLocation} onChange={ChangeFromLocation} placeholder='Chọn điểm đi...' options={destination}/>
                </div>
                <div className="choose">
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn điểm đến</label>
                    <Select value={toLocation} onChange={ChangeToLocation} placeholder='Chọn điểm đến...' options={destination}/>
                </div>
                <div className='choose'>
                    <label style={{fontSize: '16px', textTransform: 'uppercase'}}>Chọn ngày</label>
                    <Space direction="vertical" size={14} >
                        <RangePicker value={dateRange} onCalendarChange={ChangeDate} style={{width:'320px', height: '39px', borderRadius: '1px'}}/>
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
