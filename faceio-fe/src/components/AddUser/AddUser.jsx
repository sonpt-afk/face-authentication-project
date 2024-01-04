import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import "../Admin/Admin.css";
import axios from "axios";
export default function AddUser() {
  const baseURL = "http://localhost:3000";
  const onFinish = (values) => {
    axios({
      method: "post",
      url: `${baseURL}/api/manager`,
      data: values,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="add-modal">
        <div className="add-modal-content">
          <div className="add-modal-header">
            <h1 className="add-modal-header-text">Thêm người dùng</h1>
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
                    message: "Please input your name!",
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
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Chức vụ"
                name="position"
                rules={[
                  {
                    required: true,
                    message: "Please input your job!",
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
  );
}
