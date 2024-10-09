import { useMutation } from "@tanstack/react-query";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Drawer,
  message,
  Spin,
} from "antd";
import type { FormProps } from "antd";
import { useState } from "react";
import { instance } from "../../../../../api";

interface AddProductPageProps {
  open: boolean;
  onClose: () => void;
}
interface IFormValues {
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  description: string;
  tags: string[];
  sku: string;
  rating: number;
  reviews: number;
  category: string;
  status: boolean;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export default function AddProductPage({ open, onClose }: AddProductPageProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (value: IFormValues) => {
      const formData: IFormValues = {
        name: value.name,
        price: value.price,
        image_url: value.image_url,
        quantity: value.quantity,
        description: value.description,
        tags: value.tags,
        sku: value.sku,
        rating: 0,
        reviews: 0,
        status: true,
      };
      setLoading(true);
      const { data } = await instance.post("/products", formData);
      setLoading(false);
      return data;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Thêm sản phẩm thành công!",
      });
      onClose();
    },
    onError: (error: any) => {
      setLoading(false);
      messageApi.open({
        type: "error",
        content: error?.response?.data?.message || "Thêm sản phẩm thất bại!",
      });
    },
  });

  const onsubmit = (values: any) => {
    mutate(values);
  };

  return (
    <Drawer title="Thêm Sản Phẩm" onClose={onClose} open={open} size="large">
      {contextHolder}
      <div>
        <Form {...formItemLayout} onFinish={onsubmit}>
          <Form.Item
            label="Tên Sản Phẩm"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="price"
            rules={[
              { required: true, message: "Please input the price!" },
              {
                type: "number",
                min: 0,
                message: "Price must be a positive number!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="image_url"
            rules={[{ required: true, message: "Please input the image URL!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Lượng"
            name="quantity"
            rules={[
              { required: true, message: "Please input the quantity!" },
              {
                type: "number",
                min: 0,
                message: "Quantity must be a positive number!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Mô Tả"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Tags"
            name="tags"
            rules={[{ required: true, message: "Please input the tags!" }]}
          >
            <Mentions />
          </Form.Item>

          <Form.Item
            label="SKU"
            name="sku"
            rules={[{ required: true, message: "Please input the SKU!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  );
}
