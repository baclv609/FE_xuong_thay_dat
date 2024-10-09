import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Drawer,
} from "antd";
import type { FormProps } from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;

interface AddProductPageProps {
  open: boolean;
  onClose: () => void;
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

export default function EditProductPage({
  open,
  onClose,
}: AddProductPageProps) {
  const [componentVariant, setComponentVariant] =
    useState<FormProps["outlined"]>("outlined");

  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["outlined"];
  }) => {
    setComponentVariant(variant);
  };

  const onsubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Drawer title="Thêm Sản Phẩm" onClose={onClose} open={open} size="large">
      <div>
        <Form
          {...formItemLayout}
          onValuesChange={onFormVariantChange}
          variant={componentVariant}
          style={{ maxWidth: 600 }}
          initialValues={{ variant: componentVariant }}
          onFinish={onsubmit}
        >
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
            rules={[{ required: true, message: "Please input the price!" }]}
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
            rules={[{ required: true, message: "Please input the quantity!" }]}
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  );
}
