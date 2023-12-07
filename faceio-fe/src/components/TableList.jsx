import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const TableList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingStaff, isEditingStaff] = useState(null);
  const [data, setData] = useState([]);
  const showModal = (id) => {
    setIsModalOpen(true);
    const onFinish = (values) => {
      axios({
        method: "PUT",
        url: `http://localhost:3000/api/manager/${id}`,
        data: values,
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
      }).then((res) => {
        console.log(res);
      });
    };
  };
  const handleSubmitEditStaff = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingStaff(null);
  };

  const base_url = "http://localhost:3000";
  useEffect(() => {
    axios({
      method: "GET",
      url: `${base_url}/api/manager`,
    }).then((res) => {
      setData(res.data.result);
    });
  }, []);

  const baseUrl = "http://localhost:3000";
  //delete function
  const handleDelete = (id) => {
    axios
      .delete(`${baseUrl}/api/manager/${id}`)
      .then(() => {
        console.log("xoa thanh cong");
        location.reload();

        // setData(data.filter((item) => item.id != id));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
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
      key: "position",
      dataIndex: "position",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={showModal(record._id)}>
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record._id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

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
        onOk={handleSubmitEditStaff}
      >
        <Form form={form} layout="vertical" name="editForm" onFinish={onFinish}>
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
            name="position"
            label="position"
            rules={[{ required: true, message: "Job is required" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default TableList;
