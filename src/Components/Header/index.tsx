/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Modal,
  Space,
  Typography,
} from "antd";
import "./index.scss";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import api from "../../Config/api";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowForm, setIsShowfrom] = useState(false);
  const [user, setUser] = useState<string | null>();
  const [form] = useForm();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Trợ giúp",
    },
    {
      key: "2",
      label: "Liên hệ chúng tôi",
    },
  ];

  const handleLogin = async (value: any) => {
    try {
      const response = await api.post("login", value);
      const { token, role, name } = response.data;
      localStorage.setItem("token", token);
      if (role == "ADMIN") {
        navigate("/dashboard");
      }
      console.log("name", name);
      setUser(name);
      navigate("/");
      setIsShowfrom(false);
      // lưu trữ thông tin của user
      // dispatch action
      dispatch(login(response.data));
      console.log("data", response.data);
    } catch (err) {
      console.log(err);
      toast.error("Login faild");
    }
  };

  return (
    <div className="All_header">
      <div className="Header">
        <nav className="header">
          <div className="header__left">
            <img
              src="https://i.ibb.co/g9PBhC3/67ab3167-421f-4d8f-9b7a-42b417174381.webp"
              alt=""
            />
            <Button
              onClick={() => navigate("/")}
              type="text"
              style={{ backgroundColor: "transparent" }}
            >
              Trang chủ
            </Button>
            <Button type="text">
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
              >
                <Typography.Link>
                  <Space className="space" style={{ fontSize: "16px" }}>
                    Hỗ trợ
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </Button>
          </div>
          <div className="header__right">
            <Button onClick={() => navigate("transaction")} type="text">
              Giao dịch của tôi
            </Button>
            <Button onClick={() => navigate("retrieve/ongoing")} type="text">
              Đặt chỗ của tôi
            </Button>
            {user ? (
              <div
                style={{
                  paddingTop: 2,
                  display: "inline-block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "200px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    animation: "marquee 5s linear infinite",
                  }}
                >
                  Xin chào, {user}
                </span>
              </div>
            ) : (
              <>
                <Button
                  style={{ color: "black" }}
                  onClick={() => setIsShowfrom(true)}
                  type="default"
                >
                  <UserOutlined />
                  Đăng nhập
                </Button>
                <Button
                  style={{ color: "white" }}
                  type="primary"
                  onClick={() => setIsShowfrom(true)}
                >
                  Đăng ký
                </Button>
              </>
            )}
          </div>
        </nav>
        <Modal
          title={
            <div style={{ textAlign: "center", fontSize: "23px" }}>
              Đăng nhập / Đăng ký
            </div>
          }
          open={isShowForm}
          onCancel={() => setIsShowfrom(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <FormItem
            // label={
            //   <div style={{ color: "rgb(138, 138, 138)", fontSize: "17px" }}>
            //     Email/Số điện thoại di động
            //   </div>
            // }
            >
              <div style={{ color: "rgb(138, 138, 138)", fontSize: "17px" }}>
                Email/Số điện thoại di động
              </div>
              <FormItem
                name="email"
                rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
              >
                <Input
                  style={{ padding: "11px", fontSize: "17px" }}
                  placeholder="Nhập email hoặc số điện thoại"
                />
              </FormItem>
              <div style={{ color: "rgb(138, 138, 138)", fontSize: "17px" }}>
                Password
              </div>
              <FormItem
                name="password"
                rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
              >
                <Input.Password
                  style={{ padding: "11px", fontSize: "17px" }}
                  placeholder="Password"
                />
              </FormItem>
              <Button
                style={{
                  marginTop: "18px",
                  width: "470px",
                  height: "48px",
                  borderRadius: "999px",
                  fontSize: "17px",
                }}
                type="primary"
                danger
                htmlType="submit"
              >
                Tiếp tục
              </Button>
            </FormItem>

            <div className="FormLine">
              <div className="lineForm"></div>
              <div>hoặc đăng nhập/đăng ký với</div>
              <div className="lineForm"></div>
            </div>
            <Button
              style={{
                marginTop: "18px",
                width: "470px",
                height: "48px",
                borderRadius: "999px",
                fontSize: "17px",
                backgroundColor: "rgb(209, 240, 255)",
                color: "rgb(2, 69, 144)",
              }}
              type="primary"
              danger
            >
              Google
            </Button>
            <Button
              style={{
                marginTop: "18px",
                width: "470px",
                height: "48px",
                borderRadius: "999px",
                fontSize: "17px",
                backgroundColor: "rgb(209, 240, 255)",
                color: "rgb(2, 69, 144)",
              }}
              type="primary"
              danger
            >
              Facebook
            </Button>
            <p
              style={{
                textAlign: "center",
                width: "470px",
                marginTop: "35px",
                color: "rgb(138, 138, 138)",
                fontSize: "15.5px",
              }}
            >
              Bằng cách đăng ký, bạn đồng ý với{" "}
              <Link to={"/"}>Điều khoản & Điều kiện</Link> của chúng tôi và bạn
              đã đọc <Link to={"/"}>Chính Sách Quyền Riêng Tư Của</Link> chúng
              tôi.
            </p>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default Header;
