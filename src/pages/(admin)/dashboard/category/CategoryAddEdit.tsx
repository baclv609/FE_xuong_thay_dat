import { Button, Form, message, Modal, Spin } from "antd";
import React, { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "../../../../api";
import TextArea from "antd/es/input/TextArea";

interface CategoryAddEditProps {
  open: boolean;
  onClose: () => void;
  isEditMode: boolean;
  categoryId?: string | null;
}

const CategoryAddEdit = ({
  open,
  onClose,
  isEditMode,
  categoryId,
}: CategoryAddEditProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  // Lấy thông tin danh mục nếu ở chế độ chỉnh sửa
  const { data, isLoading } = useQuery({
    queryKey: ["categories", categoryId],
    queryFn: async () => {
      const { data } = await instance.get(`/categories/${categoryId}`);
      return data;
    },
    enabled: isEditMode && !!categoryId, // Chỉ chạy query nếu ở chế độ chỉnh sửa và có categoryId
  });

  const mutation = useMutation({
    mutationFn: async (category: { name: string }) => {
      if (isEditMode) {
        return instance.put(`/categories/${categoryId}`, category);
      } else {
        return instance.post("/categories", category);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      messageApi.open({
        type: "success",
        content: "Thành công!",
      });
      onClose();
    },
    onError: (error: { response?: { data?: { message?: string } } }) => {
      form.resetFields(); // Reset form khi gặp lỗi
      messageApi.open({
        type: "error",
        content: error?.response?.data?.message || "Thất bại!",
      });
    },
  });

  useEffect(() => {
    if (isEditMode && data) {
      form.setFieldsValue({ name: data.category.name }); // Thiết lập giá trị cho form nếu ở chế độ chỉnh sửa
    } else {
      form.resetFields(); // Reset form khi chuyển từ chế độ chỉnh sửa sang thêm mới
    }
  }, [isEditMode, data, form]);

  const handleClose = () => {
    form.resetFields(); // Reset form khi đóng modal
    onClose();
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title={isEditMode ? "Cập nhật danh mục" : "Thêm mới danh mục"}
        visible={open}
        onCancel={handleClose}
        footer={null}
        maskClosable={false}
      >
        {isLoading ? (
          <Spin />
        ) : (
          <Form
            form={form}
            name="add-form"
            onFinish={(values) => mutation.mutate(values)}
          >
            <Form.Item
              label="Tên danh mục"
              name="name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true, message: "Tên danh mục không được để trống" },
                { min: 3, message: "Tên danh mục phải có ít nhất 3 ký tự" },
              ]}
            >
              <TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <div style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  {isEditMode ? "Cập nhật" : "Thêm mới"}
                </Button>
              </div>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default CategoryAddEdit;
