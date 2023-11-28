import { Space, Table, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
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
        <Button type="primary" onClick={() => {}}>
          Sửa
        </Button>
        <Button type="primary" danger>
          Xóa
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Nguyễn Khánh",
    age: 25,
    email: "khanhit@mail.com",
    tags: ["IT"],
  },
  {
    key: "2",
    name: "Nguyễn Quân Trường",
    age: 35,
    email: "truongnq@mail.com",
    tags: ["Sales Manager"],
  },
  {
    key: "3",
    name: "Nguyễn Đức Trà",
    age: 20,
    email: "trand@mail.com",
    tags: ["intern"],
  },
];

const TableList = () => {
  // const baseUrl = "http://localhost:3000";
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
    </>
  );
};
export default TableList;
