import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.validateFields()
      .then((values) => {
        console.log(values, "valuess");
        navigate('/app')
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
      <Form form={form} onSubmit={() => console.log()} className="login-form">
        <Form.Item name="email" label="email" rules={[{ required: true }]}>
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item name="password" label="password" rules={[{ required: true }]}>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleFormSubmit}>
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          <a href="forgot">Forgot password</a>
          <span style={{ margin: '0 8px' }}>|</span>
          <a href="register">SignUp</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignIn;
