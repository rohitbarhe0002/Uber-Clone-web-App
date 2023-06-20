import React from 'react'
import { Form,Input, Button, Checkbox,Card } from 'antd';

function SignUp () {
  return (
    <Card style={{margin:20,display:'flex',justifyContent:'center',alignItems:'center'}}  >


    <Form onSubmit={()=>console.log()} className="login-form">
    <Form.Item rules={[{ required: true }]}>
        <Input
        //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
    </Form.Item>
    <Form.Item rules={[{ required: true }]}>
        <Input
        //   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      
    </Form.Item>
    <Form.Item rules={[{ required: true }]}> 
  <Checkbox>Remember me</Checkbox>
    
    </Form.Item>
    <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        Log in
      </Button>
      <a className="" href="">
        Forgot password
      </a>

      Or <a href="">register now!</a>
   
  </Form>
  </Card>
  )
}

export default SignUp;