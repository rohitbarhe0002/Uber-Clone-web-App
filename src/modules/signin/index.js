import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function SignIn () {
  return (
    <Form onSubmit={()=>console.log()} className="login-form">
    <Form.Item rules={[{ required: true }]}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
    
    </Form.Item>
    <Form.Item rules={[{ required: true }]}>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      
    </Form.Item>
    <Form.Item rules={[{ required: true }]}> 
  <Checkbox>Remember me</Checkbox>
      <a className="login-form-forgot" href="">
        Forgot password
      </a>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        Log in
      </Button>
      Or <a href="">register now!</a>
    </Form.Item>
  </Form>
  )
}

export default SignIn;