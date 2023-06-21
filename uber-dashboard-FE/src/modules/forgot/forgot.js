import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
function ForgotPass() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        form.validateFields()
            .then((values) => {
                console.log(values, "valuess");
                navigate('/')
            }).catch((errorInfo) => {
                console.log(errorInfo);
            });
    };

    return (
        <Card
            style={{
                margin: '70px auto',
                width: 400,
                padding: 20,
            }}
        >
            <Form form={form} onSubmit={() => console.log()} className="forgot-form">


                <Form.Item name="email" label="username" rules={[{ required: true }]}>
                    <Input placeholder="email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleFormSubmit}>
                        Forgot Password
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    );
}

export default ForgotPass;
