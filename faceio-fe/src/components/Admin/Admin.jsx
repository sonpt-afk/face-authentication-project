import { useNavigate } from "react-router-dom";
import "./Admin.css";
import ListUser from "../ListUser/ListUser";

export default function Admin() {
  const nav = useNavigate();

  return (
    <div className="admin">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h1 className="admin-sidebar-header-text">Admin Dashboard</h1>
        </div>
        <div className="admin-sidebar-options">
          <div className="admin-sidebar-options-item active">
            <a href="">Quản lý người dùng</a>
          </div>
          <div className="admin-sidebar-options-item">
            <a href="http://127.0.0.1:5173/">Đăng xuất</a>
          </div>
        </div>
      </div>
      <div className="admin-manage">
        <div className="admin-manage-header">
          <h1 className="admin-manage-header-text ">Quản lý người dùng</h1>
          {/* <div className="admin-manage-search-field">
            <label htmlFor="">Tìm nhân viên </label>
            <input type="text" placeholder="" />
          </div> */}
        </div>
        <button className="btn-add" onClick={() => nav("/add")}>
          Thêm người dùng
        </button>
        <div className="data-table">
          <div className="title-table">Danh sách người dùng</div>
          <div className="">
            <ListUser />
          </div>
        </div>
      </div>
    </div>
  );
}
