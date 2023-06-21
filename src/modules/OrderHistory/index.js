import React from 'react'
import orders from  '../../assets/data/dashboard/orders.json';
import { Card,Table,Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const renderStatus = (status) => {
    if(status==="Accepted"){
        return <Tag  color='green'>{status}</Tag>
    }
    if(status==="Pending"){
        return <Tag  color='orange'>{status}</Tag>
    }
    if(status==="Declined"){
        return <Tag  color='red'>{status}</Tag>
    }
}

function OrderHistory() {
    const navigate = useNavigate();

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
  
]
  return (
  <Card title="orders"  style={{margin:20}}>
    <Table dataSource={orders} columns={tableColumns} rowKey={'orderID'} onRow={(orderItem)=>({onClick:()=>navigate(`orderDetail/${orderItem.orderID}`)})}/>

  </Card>
  )
}

export default OrderHistory;