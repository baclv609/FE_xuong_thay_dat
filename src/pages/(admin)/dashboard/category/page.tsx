import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Space, Table } from "antd";
import type { TableProps } from "antd";
import { instance } from "../../../../api";
import { DeleteOutlined } from "@ant-design/icons";
import CategoryAddEdit from "./CategoryAddEdit";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
}

const AdminCategoryPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >(undefined);
  const queryClient = useQueryClient();

  const handleAdd = () => {
    setIsModalOpen(true);
    setSelectedCategoryId(undefined);
    setIsEditMode(false);
  };
  const handleEdit = (id: string) => {
    setIsEditMode(true);
    setIsModalOpen(true);
    setSelectedCategoryId(id);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div>
            <Button type="primary" onClick={() => handleEdit(record.key)}>
              Edit
            </Button>
          </div>
          <div>
            <Popconfirm
              title="Xoá sản phẩm này?"
              description="Bạn có chắc chắn muốn xoá sản phẩm này?"
              onConfirm={() => mutation.mutate(record.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        </Space>
      ),
    },
  ];
  // get list
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await instance.get("/categories");

      return data.categories.map((item: { _id: string; name: string }) => ({
        key: item._id,
        name: item.name,
      }));
    },
  });
  // delete
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await instance.delete(`/categories/${id}`);
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Xóa danh mục thành công!",
      });
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      messageApi.open({
        type: "error",
        content: error?.response?.data?.message || "Xóa danh mục thất bại!",
      });
    },
  });

  return (
    <>
      <div>
        {contextHolder}
        <Button type="primary" className="my-3" onClick={handleAdd}>
          Thêm mới danh mục
        </Button>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          loading={isLoading}
        />
        <CategoryAddEdit
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isEditMode={isEditMode}
          categoryId={selectedCategoryId}
        />
      </div>
    </>
  );
};

export default AdminCategoryPage;
