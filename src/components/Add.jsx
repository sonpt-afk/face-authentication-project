import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
  

export default function Add(){
    return(
        <>
        
        <div className="add-modal">
            <div className="add-modal-content">
                <div className="add-modal-header">
                    <h1 className="add-modal-header-text">Thêm nhân viên</h1>
                </div>
                <div className="add-modal-body">
                <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Họ Tên"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
  
    <Form.Item
      label="Tuổi"
      name="age"
      rules={[
        {
          required: true,
          message: 'Please input your age!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
   
    <Form.Item
      label="Chức vụ"
      name="job"
      rules={[
        {
          required: true,
          message: 'Please input your job!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
                    
                    </div>
                    </div>
                   

        </div>
        </>
    )
}