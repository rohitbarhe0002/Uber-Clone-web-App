import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.validateFields()
      .then((values) => {
        console.log(values, "valuess")
        navigate('/')

      }).catch((errorInfo) => {
        console.log(errorInfo);
      });

  };

  const [form] = Form.useForm();
  return (
    <Card
      style={{
        margin: '70px auto',
        width: 400,
        padding: 20,
      }}
    >
      <Form form={form} onSubmit={() => console.log()} className="login-form">
        <Form.Item name="username" label="username" rules={[{ required: true }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="email" label="email" rules={[{ required: true }]}>
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item name="password" label="password" rules={[{ required: true }]}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleFormSubmit}>
            Sign up
          </Button>
        </Form.Item>
        <Form.Item>
          <a href="forgot">Forgot password</a>
          <span style={{ margin: '0 8px' }}>|</span>
          <a href="/"> Back to Login</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignUp;

