import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
function SignUp () {
  const handleFormSubmit = () => {
    form.validateFields()
        .then((values) => {
       console.log(values,"valuess")

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
        <Form.Item name="username"  label="username" rules={[{ required: true }]}>
          <Input placeholder="Username" />
        </Form.Item> 
        <Form.Item name="email"  label="username" rules={[{ required: true }]}>
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
          <a href="">Forgot password</a>
          <span style={{ margin: '0 8px' }}>|</span>
          <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignUp;
