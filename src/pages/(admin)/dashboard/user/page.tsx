import { Space, Table, Tag, Spin, Alert } from "antd";
import type { TableProps } from "antd";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../../api";

interface DataType {
  key: string;
  usename: string;
  email: string;
  role: string;
  status: boolean;
  createdAt: string;
}

const AdminUsersPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await instance.get("/auth");
      const { users } = response.data;

      return users.map((user) => ({
        key: user._id,
        ...user,
      }));
    },
  });

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "volcano" : "blue"}>{role}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.usename}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  if (isError) {
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
      />
    );
  }

  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} />
    </>
  );
};

export default AdminUsersPage;
