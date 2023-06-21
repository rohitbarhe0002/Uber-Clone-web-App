import React, { useState } from 'react'
import dishes from  '../../assets/data/dashboard/dishes.json';
import { Card,Descriptions,Divider,List,Button, Table,Tag } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import CreateItem from '../CreateItem';
import ModalView from '../../shared/Modal';
import ModalContent from '../../shared/MdalContent';

const renderStatus = (status) => {
    if(status=="Accepted"){
        return <Tag  color='green'>{status}</Tag>
    }
    if(status=="Pending"){
        return <Tag  color='orange'>{status}</Tag>
    }
    if(status=="Declined"){
        return <Tag  color='red'>{status}</Tag>
    }
}

function RestaurentsMenu () {
    const [restaurRentsMenu,setRestaurRetantsMenu]   =  useState(dishes)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [foodID, setFoodID] = useState();


   const  removeItems = (items) =>{
      const filteredRestrauMenu = restaurRentsMenu.filter(obj => obj.id !== items);
       setRestaurRetantsMenu(filteredRestrauMenu);
   }

const handleItemEdit= (itemId) =>{
    console.log(itemId,"item id");
    setFoodID(itemId)
    setIsModalOpen(!isModalOpen)
}
    const tableColumns =[{
        title: 'Menu Item',
        dataIndex: 'name', 
        key: 'name'
    },

    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render:(price)=>`${price}`,

    },
    {
        title: 'Action',
        dataIndex: 'id',
        key: 'id',
        render:(record)=> <Button onClick={()=>removeItems(record)} danger> Remove</Button>,
        
        
    },
    {
        title: 'Edit',
        dataIndex: 'id',
        key: 'id',
        render:(record)=> <Button onClick={()=>handleItemEdit(record)} primary>Edit</Button>,
    },
  
]

const renderMenuItemButton = () => <Button type='primary' onClick={()=>setIsModalOpen(!isModalOpen)}>Create Item</Button>;
  return (
    <>
  <Card title="menu"  style={{margin:20}} extra={renderMenuItemButton()}>
    <Table dataSource={restaurRentsMenu} columns={tableColumns}  rowKey={(record) => record.id}  />
  </Card>
{/* <CreateItem isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setRestaurRetantsMenu={setRestaurRetantsMenu} restaurRentsMenu={restaurRentsMenu} itemId={foodID}/> */}
<ModalView  isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
<ModalContent setRestaurRetantsMenu={setRestaurRetantsMenu} restaurRentsMenu={restaurRentsMenu} itemId={foodID} setItemId={setFoodID} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}  />
</ModalView>
</>
  )
}

export default RestaurentsMenu;