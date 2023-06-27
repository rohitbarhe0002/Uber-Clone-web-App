import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { AuthApi } from '../../apis/AuthApis/AuthorApi';
import { useNavigate } from 'react-router-dom';

function SignUp () {
const navigate = useNavigate();

  const handleSignUp = () => {
    form.validateFields()
        .then((values) => {
        let userInfo = {
          username: values.username,
          email: values.email,
          password: values.password,
          address: values.address,
          city: values.city,
          phoneNumber:Number(values.phoneNumber),
        }
       AuthApi.SignUp(userInfo).then((res)=>{
         navigate('/signin')
       })

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
        <Form.Item name="username"  label="Username" rules={[{ required: true }]}>
          <Input placeholder="John" />
        </Form.Item> 
        <Form.Item name="email"  label="Email" rules={[{ required: true }]}>
          <Input placeholder="email" />
        </Form.Item> 
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input type="password" placeholder="*******" />
        </Form.Item>
        <Form.Item name="address" label="Addresss" rules={[{ required: true }]}>
          <Input type="text" placeholder="street" />
        </Form.Item>
        <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Input type="text" placeholder="Indore" />
        </Form.Item>
        <Form.Item name="phoneNumber" label="phonenumber" rules={[{ required: true }]}>
          <Input type="tel" placeholder="+917415864990" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleSignUp}>
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
