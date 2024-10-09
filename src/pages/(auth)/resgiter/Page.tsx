import { useMutation } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { instance } from "../../../api";

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const ResgisterPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate } = useMutation({
    mutationFn: async (formData: FieldType) => {
      const response = await instance.post("/auth/resgister", formData);
      return response.data;
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Đăng ký thành công!",
      });
    },
    onError(error) {
      messageApi.open({
        type: "error",
        content: error?.response.data.message || "Đăng ký thất bại!",
      });
    },
  });

  return (
    <>
      {contextHolder}
      <Form
        name="Resgister"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={(values) => mutate(values)}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập username" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Định dạng email không đúng!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập password!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="confirmPassword"
          name="confirmPassword"
          rules={[
            { required: true, message: "Vui lòng nhập confirmPassword!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResgisterPage;
