import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../../apis/AuthApis/AuthorApi';

function SignIn() {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSignIn = () => {
    form.validateFields()
      .then((values) => {
        let userInfo = {
          username: values.username,
          password: values.password,
        }
        AuthApi.SignIn(userInfo).then((res) => {
          console.log(res.status,"token");
        navigate('/');
        })
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
        <Form.Item name="username" label="username" rules={[{ required: true }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" label="password" rules={[{ required: true }]}>
          <Input type="password" placeholder="******" />
        </Form.Item>
        <Form.Item >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSignIn}>
            Sign in
          </Button>
        </Form.Item>
        <Form.Item>
          <a href="#">Forgot password</a>
          <span style={{ margin: '0 8px' }}>|</span>
          <a href="#">Register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SignIn;
