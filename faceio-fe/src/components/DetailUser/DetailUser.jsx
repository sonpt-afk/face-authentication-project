import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { InputNumber, Button, Form, Input } from "antd";
function DetailUser() {
  const nav = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();
  const [listUser, setlistUser] = useState();
  const [editUser, isEdit] = useState(true);
  useEffect(() => {
    axios({
      url: `http://localhost:3000/api/manager/${params.id}`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.result);
      setlistUser(res.data.result);
    });
  }, []);
  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  function onFinish(values) {
    console.log(values);
    axios({
      url: `http://localhost:3000/api/manager/${params.id}`,
      method: "PUT",
      data: values,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    })
      .then((res) => {
        console.log(res);
        const dataEdit = res.data.result;
        setlistUser(dataEdit);
        setTimeout(() => {
          isEdit(true);
        }, 1000);
      })
      .catch((err) => {

        console.log(err);
      });

    nav(`/admin`);
  }

  return (
    <>
      {editUser ? (
        <>
          <div className="add-modal">
            <div className="add-modal-content">
              <div className="add-modal-header">
                <h1 className="add-modal-header-text">
                  Cập nhập thông tin người dùng {listUser?.name}
                </h1>
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
                  {/* Form items... */}
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
      ) : null}
    </>
  );
}

export default DetailUser;
