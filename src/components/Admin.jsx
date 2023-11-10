export default function Admin(){
    return(
        <div className='admin'>
        <div className="sidebar-main">
            <div className="pgside">
                <div className="pguser">
                    <AdminPanelSettings/>
                    <h1 className="txt">Hello Admin</h1>

                    <a href="#" className="current">
                        <Group/>
                        <h1 className="txt">Quản lý nhân viên</h1>
                    </a>
                    <a href="http://localhost:5173">
                        <Logout/>
                        <h1 className="txt">Đăng xuất</h1>
                    </a>
                </div>
                <div className="header_admin">
                    <div className="text-header">Quản lý nhân viên</div>
                    <button className="btn-create" onClick={showCreate}>
                        <AddCircle/>
                        Thêm mới nhân viên
                    </button>
                </div>
                <div className="data-table">
                    <div className="title-table">Danh sách nhân viên</div>
                    <div className="">
                        <TableHead>
                            <TableRow>
                                {columns.map((header)=>(
                                    <TableCell align="center"
                                    style={{
                                        minWidth: header.minWidth,
                                        fontSize: "16px",
                                        fontWeight: "bold"
                                    }}
                                    key={header.id}
                                    >
                                        {header.headerName}
                                    </TableCell>
                                ))}
                                </TableRow>

                        </TableHead>
                        <TableBody>
                            {listWorker}
                        </TableBody>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}