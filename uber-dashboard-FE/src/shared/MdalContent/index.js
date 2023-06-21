import React, { useEffect, useState } from 'react';
import { Card, Form, Button,  Input, Radio } from 'antd';
const { TextArea } = Input;

const ModalContent = ({ restaurRentsMenu, setRestaurRetantsMenu, itemId, cardTitle, setIsModalOpen, isModalOpen, setItemId }) => {
  const [form] = Form.useForm();
  const plainOptions = ['Accepted', 'Pending', 'Declined'];


  useEffect(() => {
    const updateFormFields = () => {
      if (itemId) {
        let updatedItem = cardTitle ? restaurRentsMenu.find((item) => item.orderID === itemId) : restaurRentsMenu.find((item) => item.id === itemId);
        if (updatedItem) {
          form.setFieldsValue({
            name: cardTitle ? updatedItem.orderID : updatedItem.name,
            price: updatedItem.price,
            address: updatedItem.deliveryAddress,
            status: updatedItem.status,
          });
        }
      }
    };

    updateFormFields();
  }, [itemId, cardTitle, form, restaurRentsMenu]);
//   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
  const handleFormSubmit = () => {
    form  
    .validateFields()
      .then((values) => {
        if (cardTitle) {
          const pos = restaurRentsMenu.findIndex((o) => o.orderID === itemId);
          if (pos !== -1) {
            const updatedItem = {
              ...restaurRentsMenu[pos],
              orderID: Math.random().toString(),
              price: values.price,
              deliveryAddress: values.address,
              status: values.status,
            };
            const newData = [...restaurRentsMenu];
            newData[pos] = updatedItem;
            setRestaurRetantsMenu(newData);
          } else {
            setRestaurRetantsMenu([
              ...restaurRentsMenu,
              { orderID: Math.random().toString(), price: values.price, deliveryAddress: values.address, status: values.status },
            ]);
          }
        } else {
          const pos = restaurRentsMenu.findIndex((o) => o.id === itemId);
          if (pos !== -1) {
            const updatedItem = {
              ...restaurRentsMenu[pos],
              id: Math.random().toString(),
              name: values.name,
              price: values.price,
              quantity: Math.random().toString(),
            };
            const newData = [...restaurRentsMenu];
            newData[pos] = updatedItem;
            setRestaurRetantsMenu(newData);
          } else {
            setRestaurRetantsMenu([...restaurRentsMenu, { id: Math.random().toString(), name: values.name, price: values.price, quantity: Math.random().toString() }]);
          }
        }
        form.resetFields();
        setIsModalOpen(!isModalOpen);
        setItemId(null);
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  const handleClose = () => {
    form.resetFields();
  };

  return (
    <>
      <Card title={cardTitle ?? 'Create Menu'} style={{ margin: 20 }}>
        <Form form={form} layout="vertical">
          {!cardTitle && (
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input type="text" placeholder="Your wish" />
            </Form.Item>
          )}
          {!cardTitle && (
            <Form.Item label="Description" name="description" rules={[{ required: true }]}>
              <TextArea rows={4} />
            </Form.Item>
          )}
          {cardTitle && (
            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
              <Input type="text" placeholder="Address1" />
            </Form.Item>
          )}
          {cardTitle && (
            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
              <Radio.Group options={plainOptions} />
            </Form.Item>
          )}
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" placeholder="Price of dish" />
          </Form.Item>
        </Form>
        <Button onClick={handleFormSubmit}>{itemId ? 'Edit' : 'Submit'}</Button>
      </Card>
    </>
  );
};

export default ModalContent;
