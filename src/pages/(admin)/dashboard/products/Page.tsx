/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Image,
  message,
  Popconfirm,
  Skeleton,
  Space,
  Table,
  Tag,
} from "antd";
import type { PaginationProps, PopconfirmProps, TableProps } from "antd";
import { Pagination } from "antd";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { instance } from "../../../../api";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import AddProductPage from "./add/Page";
import EditProductPage from "./edit/Page";

interface DataType {
  key: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  is_stock: boolean;
  tags: string[];
}

const AdminProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [pagingCounter, setPagingCounter] = useState(0);
  const [page, setPage] = useState(1); // Bạn có thể đặt giá trị mặc định là 1
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true); // Mở Drawer
  };

  const onClose = () => {
    setDrawerVisible(false); // Đóng Drawer
  };

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await instance.get("/products");
      const { docs, totalDocs, pagingCounter, page } = response.data;

      setTotalDocs(totalDocs);
      setPagingCounter(pagingCounter);
      setPage(page);

      return docs.map((product: any) => ({
        key: product._id,
        ...product,
      }));
    },
  });

  const confirm: PopconfirmProps["onConfirm"] = (
    e: number | string | undefined | any
  ) => {
    mutation.mutate(e);
  };
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      await instance.delete(`/products/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      message.success("Xoá sản phẩm thành công");
    },
  });

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Ảnh",
      dataIndex: "image_url",
      key: "image_url",
      render: (image_url) => <Image src={image_url} width={50} />,
    },
    {
      title: "Đánh giá",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
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
      title: "sku",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div>
            <Button type="primary" onClick={showDrawer}>
              Edit
            </Button>
          </div>
          <div>
            <Popconfirm
              title="Xoá sản phẩm này?"
              description="Bạn có chắc chắn muốn xoá sản phẩm này?"
              onConfirm={() => confirm(record._id)}
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
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Add Product
      </Button>
      <Skeleton loading={isLoading} active>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
          className="mt-4 mb-3"
        />
        <Pagination
          defaultCurrent={page}
          total={totalDocs}
          onChange={(page) => {
            setCurrentPage(page); // Cập nhật currentPage khi phân trang thay đổi
          }}
          align="center"
          className="mt-4"
        />
      </Skeleton>

      <AddProductPage open={drawerVisible} onClose={onClose} />
      {/* <EditProductPage open={drawerVisible} onClose={onClose} /> */}
    </>
  );
};

export default AdminProductPage;
