import React, { useEffect, useState } from 'react';
import { Card, Form, Button,  Input, Radio } from 'antd';

const EditModal = ({  setIsModalOpen, isModalOpen,cardTitle,userData,setUserData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const updateFormFields = () => {
        if (userData) {
          form.setFieldsValue({
            username:  userData.userName,
            address : userData.address,
            city: userData.city,
            phoneNumber: userData.phoneNumber,

          });
        }
    };
    updateFormFields();
  }, [userData]);
//   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
//   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
  const handleFormSubmit = () => {
    form  
    .validateFields()
      .then((values) => {
        setUserData({...userData,userName:values.username,address:values.address,city:values.city,phoneNumber:values.phoneNumber}) })
        .catch((errorInfo) => {
        console.log(errorInfo);
      });
      setIsModalOpen(!isModalOpen)
  };

  const handleClose = () => {
    form.resetFields();
  };

  return (
    <>
      <Card title={cardTitle} style={{ margin: 20 }}>
        <Form form={form} layout="vertical">
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
              <Input type="text" placeholder="username" />
            </Form.Item>

            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
              <Input type="text" placeholder="address wish" />
            </Form.Item>
          
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input type="text" placeholder="Location" />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phonenumber" rules={[{ required: true }]}>
              <Input type="text" placeholder="+91" />
            </Form.Item>
        </Form>
        <Button onClick={handleFormSubmit}>update user</Button>
      </Card>
    </>
  );
};

export default EditModal;
