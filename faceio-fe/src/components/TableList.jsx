import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const TableList = () => {
  const [data, setData] = useState([]);
  const nav = useNavigate();

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
          <Button type="primary" onClick={() => nav(`/admin/${record._id}`)}>
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
    </>
  );
};
export default TableList;
