import React, { useState } from 'react'
import orders from  '../../assets/data/dashboard/orders.json';
import { Card,Button, Table,Tag } from 'antd';
// import { useNavigate } from 'react-router-dom';
import ModalContent from '../../shared/MdalContent';
import ModalView from '../../shared/Modal';

const renderStatus = (status) => {
    if(status==="Accepted"){
        return <Tag  color='green'>{status}</Tag>
    }
    if(status ==="Pending"){
        return <Tag  color='orange'>{status}</Tag>
    }
    if(status==="Declined"){
        return <Tag  color='red'>{status}</Tag>
    }
}


function Order() {
    // const navigate = useNavigate();
    const [userOrder,setUserOrder] = useState(orders);
    const [orderModal,setOrderModal] = useState(false);
    const [customerOrderId,setCustomerOrderId] = useState();


    const  removeOrderdItems = (items) =>{
        const filteredOrder = userOrder.filter(obj => obj.orderID !== items);
        setUserOrder(filteredOrder);
    }
      
    const handleItemEdit= (itemId) =>{
        console.log(itemId,"item id");
        setCustomerOrderId(itemId)
        setOrderModal(!orderModal)
    }
    const tableColumns =[{
        title: 'Order ID',
        dataIndex: 'orderID',
        key: 'orderID'
    },
    {
        title: 'Delivery address',
        dataIndex: 'deliveryAddress',
        key: 'deliveryAddress'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render:(price)=>`${price}`,

    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render:(status)=>renderStatus(status),
    },
    
    {
        title: 'Action',
        dataIndex: 'orderID',
        key: 'orderID',
        render:(record)=> <Button onClick={()=>removeOrderdItems(record)} danger> Remove</Button>,
        
        
    },
    {
        title: 'Edit',
        dataIndex: 'orderID',
        key: 'orderID',
        render:(record)=> <Button onClick={()=>handleItemEdit(record)} primary>Edit</Button>,
    },
  
]
const renderMenuItemButton = () => <Button type='primary' onClick={()=>setOrderModal(!orderModal)}>Create Item</Button>;

  return (
    <>
    {/* onRow={(orderItem)=>({onClick:()=>navigate(`orders/${orderItem.orderID}`)})} */}
  <Card title="orders"  style={{margin:20}} extra={renderMenuItemButton()}>
    <Table dataSource={userOrder} columns={tableColumns} rowKey={(record) =>record.orderID} onRow={(orderItem)=>({onClick:()=>console.log("from roe")})}  />
  </Card>
<ModalView  isModalOpen={orderModal} setIsModalOpen={setOrderModal} >
<ModalContent setRestaurRetantsMenu={setUserOrder} restaurRentsMenu={userOrder} itemId={customerOrderId} setItemId={setCustomerOrderId} cardTitle="create order" isModalOpen={orderModal} setIsModalOpen={setOrderModal}   />
</ModalView>
</>
  )
}

export default Order;