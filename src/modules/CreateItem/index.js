import React, { useEffect } from 'react';
import { Card, Form, Button, Modal, Input } from 'antd';
const { TextArea } = Input
const CreateItem = ({ isModalOpen, setIsModalOpen, restaurRentsMenu, setRestaurRetantsMenu ,itemId}) => {
    const [form] = Form.useForm();
    
    useEffect(() => {
        if(itemId){
        let updateFoodItem = restaurRentsMenu.filter((item) => item.id === itemId);
        try {
            form.setFieldsValue({
                name: updateFoodItem?.[0]?.name,
                // description: asset.description,
                price: updateFoodItem?.[0]?.price,
            });
        } catch (error) {
            console.log(error);
        }
    }else{

 form.resetFields();
    }
 }, [itemId,form,restaurRentsMenu])



    // Case: Submit button out of Form
    const handleFormSubmit = () => {
        console.log(itemId,"item is");
        form.validateFields()
            .then((values) => {
                if (itemId !== '') {
                    console.log("con")
                    let pos = restaurRentsMenu && restaurRentsMenu.findIndex((o, i) => o.id === itemId);
                    if (pos !== -1) {
                      // Existing user found in the list
                      let updatedItem = { ...restaurRentsMenu[pos], id: Math.random().toString(), name: values.name, price: values.price, quantity: Math.random().toString() };
                      let newData = [...restaurRentsMenu];
                      newData[pos] = updatedItem;
                      console.log(newData[pos], "-----pos");
                      setRestaurRetantsMenu(newData);
                        setIsModalOpen(!isModalOpen)
                form.resetFields();
                    }
                else{
                setRestaurRetantsMenu([...restaurRentsMenu, { id: Math.random().toString(), name: values.name, price: values.price, quantity: Math.random().toString() }])
                setIsModalOpen(!isModalOpen)
                form.resetFields();
                }
            }
        }).catch((errorInfo) => {
                console.log(errorInfo);
            });
    };

    const handleClose = () => {
        form.resetFields();
        setIsModalOpen(!isModalOpen)
    }
    

    return (
        <>
            <Modal open={isModalOpen} onOk={() =>handleClose()} onCancel={() =>handleClose()}>
                <Card title="create Item" style={{ margin: 20 }}>
                    <Form form={form} layout='vertical' >
                        <Form.Item name="name" label="name" rules={[{ required: true }]}>
                            <Input type='text' placeholder="your wish" />
                        </Form.Item>
                    {!itemId  &&   <Form.Item label="description" name="description" rules={[{ required: true }]}>
                            <TextArea rows={4}>
                            </TextArea>
                        </Form.Item>}
                        <Form.Item name="price" label="price" rules={[{ required: true }]}>
                            <Input type='number' placeholder="price of dish" />
                        </Form.Item>
                    </Form>
                    <Button onClick={handleFormSubmit}>{itemId?'Edit':'Submit'}</Button>
                </Card>
            </Modal>
        </>
    );
};

export default CreateItem;
