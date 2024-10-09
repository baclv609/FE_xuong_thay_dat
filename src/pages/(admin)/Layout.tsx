import React, { useState } from "react";
import {
  DashboardOutlined,
  FileOutlined,
  TagOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/admin/dashboard", <DashboardOutlined />),
  getItem("Products", "/admin/products", <AppstoreAddOutlined />),
  getItem("Categories", "/admin/categories", <TagOutlined />),
  getItem("Users", "/admin/users", <UserOutlined />, [
    getItem("All Users", "/admin/users"),
    getItem("User Roles", "/admin/users/roles"),
    getItem("User Authentication", "/admin/users/authentication"),
  ]),
  getItem("Orders", "/admin/orders", <ShoppingCartOutlined />, [
    getItem("Pending Orders", "/admin/orders/pending"),
    getItem("Completed Orders", "/admin/orders/completed"),
    getItem("Cancelled Orders", "/admin/orders/cancelled"),
  ]),
  getItem("Menu Management", "/admin/menu", <FileOutlined />, [
    getItem("View Menu", "/admin/menu/view"),
    getItem("Add New Item", "/admin/menu/add"),
    getItem("Edit Item", "/admin/menu/edit"),
  ]),

  getItem("Reports", "/admin/reports", <BarChartOutlined />, [
    getItem("Sales Reports", "/admin/reports/sales"),
    getItem("User Activity", "/admin/reports/activity"),
  ]),
  getItem("Settings", "/admin/settings", <SettingOutlined />),
];

const LayoutAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const onMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/dashboard"]}
          mode="inline"
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
