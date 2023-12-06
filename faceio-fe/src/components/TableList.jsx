import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const TableList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingStaff, setEditingStaff] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleEditStaff = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingStaff(null);
  };
  const [data, setData] = useState([
    {
      id: "1",
      name: "Nguyễn Khánh",
      age: 25,
      email: "khanhit@mail.com",
      tags: ["IT"],
    },
    {
      id: "2",

      name: "Nguyễn Quân Trường",
      age: 35,
      email: "truongnq@mail.com",
      tags: ["Sales Manager"],
    },
    {
      id: "3",
      name: "Nguyễn Đức Trà",
      age: 20,
      email: "trand@mail.com",
      tags: ["intern"],
    },
  ]);

  // const save = async () => {
  //   try {
  //     const values = await form.validateFields();

  //     // Perform the API call to update the information using onUpdateInfo
  //     // Pass the updated information and key to the onUpdateInfo function
  //     onUpdateInfo(editingKey, values);

  //     setEditingKey("");
  //     setModalVisible(false);
  //     form.resetFields();
  //   } catch (error) {
  //     console.error("Validation failed", error);
  //   }
  // };

  const baseUrl = "http://localhost:3000";
  //delete function
  const handleDelete = (id) => {
    axios
      .delete(`${baseUrl}/api/manager/${id}`)
      .then((response) => {
        console.log("Success fetching data:", response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      editable: true,
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: true,
    },
    {
      title: "Chức vụ",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "intern") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={showModal}>
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(2);
            }}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/api/manager?page=1&limit=3&search=test`)
  //     .then((response) => {
  //       console.log("Success fetching data:", response);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  return (
    <>
      <Table
        style={{
          width: "900px",
          margin: "0 auto",
        }}
        columns={columns}
        dataSource={data}
      />
      ;
      <Modal
        title="Edit Information"
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleEditStaff}
      >
        <Form form={form} layout="vertical" name="editForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: "Age is required" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="job"
            label="Job"
            rules={[{ required: true, message: "Job is required" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default TableList;
