// import {Button, Form, Radio, Space, Switch, Table} from 'antd';
// import { useState } from 'react';
// import DownOutlined from '@ant-design/icons'
// import Modal from "antd/lib/modal/Modal";
// import { Link, useHistory, useParams } from "react-router-dom";
// import taikhoanApi from './../../../api/taikhoanApi';
// const columns = [
//     {
//         title: 'Brand',
//         dataIndex: 'brand',
//     },
//     {
//         title: 'Chuyến bay',
//         dataIndex: 'flight',
//     },
//     {
//         title: 'Giá',
//         dataIndex: 'price',
//         sorter: (a, b) => a.price - b.price,
//     },
//     {
//         title: 'Thời gian',
//         dataIndex: 'time',


//     },
    
//     {
//         title: '',
//         key: 'action',
//         sorter: true,
//         render: () => (
//             <Space size="middle">
//                <Button
//                       className="float-right position-absolute btn-dt"
//                       onClick={showModal}
//                       variant="contained"
//                       color="secondary"
//                     >
//                       Đặt vé
//                     </Button>
//             </Space>
//         ),
//     },
// ];
// const data = [
//     {
//         key: 1,
//         brand: 'VietJet',
//         flight: 'VJ116',
//         price: '800000',
//         time: '05:00 - 07:15'
//     },
//     {
//         key: 2,
//         brand: 'Bamboo',
//         flight: 'VJ116',
//         price: '600000',
//         time: '05:00 - 07:15'
//     },
//     {
//         key: 3,
//         brand: 'VietNam airline',
//         flight: 'VJ116',
//         price: '500000',
//         time: '05:00 - 07:15'
//     },
// ];





// const TableTicket = () => {

  

//     const [rowSelection, setRowSelection] = useState({});
//     const [hasData, setHasData] = useState(true);
//     const [tableLayout, setTableLayout] = useState(undefined);
//     const [top, setTop] = useState('none');
//     const [bottom, setBottom] = useState('bottomRight');
//     const [ellipsis, setEllipsis] = useState(false);
//     const [yScroll, setYScroll] = useState(false);
//     const [xScroll, setXScroll] = useState(undefined);


//     const { id } = useParams();
//     const [state, setState] = useState({
//       listdate: "",
//       visible: false,
//       visible2: false,
//       visible3: false,
//       name: "",
//       email: "",
//       sdt: "",
//       diachi: "",
//       nguoilon: 1,
//       treem: 0,
//       embe: 0,
//       dieukhoan: false,
//       valueDate: "",
//       date: "",
//       loadlaihoadon: 1,
//     });


   

//     const handleEllipsisChange = (enable) => {
//         setEllipsis(enable);
//     };





//     // const handleRowSelectionChange = (enable) => {
//     //     setRowSelection(enable ? {} : undefined);
//     // };

//     const handleYScrollChange = (enable) => {
//         setYScroll(enable);
//     };

//     const handleXScrollChange = (e) => {
//         setXScroll(e.target.value);
//     };

//     const handleDataChange = (newHasData) => {
//         setHasData(newHasData);
//     };

//     const scroll = {};

//     if (yScroll) {
//         scroll.y = 240;
//     }

//     if (xScroll) {
//         scroll.x = '100vw';
//     }

//     const tableColumns = columns.map((item) => ({ ...item, ellipsis }));

//     if (xScroll === 'fixed') {
//         tableColumns[0].fixed = true;
//         tableColumns[tableColumns.length - 1].fixed = 'right';
//     }

//     const tableProps = {

       
//         rowSelection,
//         scroll,
//         tableLayout,
//     };

//     const showModal = async () => {
//         if (users) {
//           var user = await taikhoanApi.getOne(+users.id).then((data) => {
//             return data;
//           });
//           setState({
//             ...state,
//             visible3: false,
//             visible: true,
//             name: user.name,
//             diachi: user.diachi,
//             sdt: user.sdt,
//             email: user.email,
//           });
//         } else {
//           message.warning("Bạn cần đăng nhập trước!");
//         }
//       };
//     return (
//         <>
//             <Table
//                 {...tableProps}
//                 pagination={{
//                     position: [top, bottom],
//                 }}
//                 columns={tableColumns}
//                 dataSource={data}
//                 scroll={scroll}
//             />
//         </>
//     );
// };

// export default TableTicket;