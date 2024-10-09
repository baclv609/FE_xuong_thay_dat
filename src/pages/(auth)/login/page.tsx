import { useMutation } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { instance } from "../../../api";
import { useLocalStorage } from "usehooks-ts";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginPage = () => {
  const [, setUser] = useLocalStorage("user", { user: "", token: "" });
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate } = useMutation({
    mutationFn: async (formData: FieldType) => {
      const response = await instance.post("/auth/login", formData);
      return response.data;
    },
    onSuccess: (data: any) => {
      setUser(data);
      messageApi.open({
        type: "success",
        content: "Đăng nhập thành công!",
      });
    },
    onError: (error: any) => {
      messageApi.open({
        type: "error",
        content: error?.response.data.message || "Đăng nhập thất bại!",
      });
    },
  });
  return (
    <>
      {contextHolder}
      <Form
        name="Login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={(values) => mutate(values)}
        autoComplete="off"
        className="login-form mx-auto"
      >
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
          rules={[{ required: true, message: "Vui lòng nhập password!" }]}
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

export default LoginPage;
