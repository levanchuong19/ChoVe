import { DownOutlined, SwapOutlined, UserOutlined } from "@ant-design/icons";
import { Seat } from "@phosphor-icons/react";
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Select,
  Space,
  Typography,
} from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import { useState } from "react";
import moment from "moment";
import "./index.scss";

const { Option } = Select;
function PlaneTrip() {
  const { Text } = Typography;
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const summary = `${adults} Người lớn, ${children} Trẻ em, ${infants} Em bé`;
  const handleDropdownVisibleChange = (visible: boolean) => {
    setIsDropdownVisible(visible);
  };
  const handleIncrement = (type: string) => {
    if (type === "adults" && adults < 7) setAdults(adults + 1);
    if (type === "children" && children < 7 && adults + children < 7)
      setChildren(children + 1);
    if (type === "infants" && infants < 4) setInfants(infants + 1);
  };

  const handleDecrement = (type: string) => {
    if (type === "adults" && adults > 0) setAdults(adults - 1);
    if (type === "children" && children > 0) setChildren(children - 1);
    if (type === "infants" && infants > 0) setInfants(infants - 1);
  };
  const dropdownContent = (
    <div
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3 style={{ fontSize: "19px", paddingLeft: "10px" }}>Số hành khách</h3>
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <img
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e0beae0651a82ad0d2b7afcfb49b5746.svg"
          alt=""
        />
        <div>
          <p className="Pbig">Người lớn</p>
          <p className="PSmall">Từ 12 tuổi</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => handleDecrement("adults")} size="small">
            -
          </Button>
          <Text
            style={{
              margin: "0 15px",
              textDecoration: "underline", // thêm gạch chân dưới
              textUnderlineOffset: "4px", // set khoảng cách từ số tới gạch chân
            }}
          >
            {" "}
            {adults}{" "}
          </Text>
          <Button
            type="default"
            onClick={() => handleIncrement("adults")}
            size="small"
          >
            +
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          gap: "33px",
        }}
      >
        <img
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fa28f412dbf8a058b071fee1f4ba9685.svg"
          alt=""
        />
        <div>
          <p className="Pbig">Trẻ em</p>
          <p className="PSmall">Từ 2 - 11 tuổi</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => handleDecrement("children")} size="small">
            -
          </Button>
          <Text
            style={{
              margin: "0 15px",
              textDecoration: "underline", // thêm gạch chân dưới
              textUnderlineOffset: "4px", // set khoảng cách từ số tới gạch chân
            }}
          >
            {" "}
            {children}{" "}
          </Text>
          <Button
            type="default"
            onClick={() => handleIncrement("children")}
            size="small"
          >
            +
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "center",
          gap: "38px",
        }}
      >
        <img
          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d2429e318374aece2500e1fd5e432856.svg"
          alt=""
        />
        <div>
          <p className="Pbig">Em bé</p>
          <p className="PSmall">Dưới 2 tuổi</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={() => handleDecrement("infants")} size="small">
            -
          </Button>
          <Text
            style={{
              margin: "0 15px",
              textDecoration: "underline", // thêm gạch chân dưới
              textUnderlineOffset: "4px", // set khoảng cách từ số tới gạch chân
            }}
          >
            {" "}
            {infants}{" "}
          </Text>
          <Button
            type="default"
            onClick={() => handleIncrement("infants")}
            size="small"
          >
            +
          </Button>
        </div>
      </div>
      <Button onClick={() => setIsDropdownVisible(false)} type="primary">
        Xong
      </Button>
    </div>
  );

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  const [from, setFrom] = useState("TP HCM (SGN)");
  const [to, setTo] = useState("Vinh (VII)");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const airports = [
    { code: "SGN", name: "TP HCM (SGN)" },
    { code: "VII", name: "Vinh (VII)" },
    { code: "HAN", name: "Hà Nội (HAN)" },
    { code: "DAD", name: "Đà Nẵng (DAD)" },
  ];
  const [isChooseTrip, setIsChooseTrip] = useState(true);
  // const [isChoose, setIsChoose] = useState(true);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [, setDepartureDate] = useState<dayjs.Dayjs | null>(null);
  const [, setReturnDate] = useState<dayjs.Dayjs | null>(null);

  const disabledDate = (current: dayjs.Dayjs) => {
    return current && current < dayjs().endOf("day");
  };

  const handleDepartureDateChange = (date: dayjs.Dayjs | null) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date: dayjs.Dayjs | null) => {
    setReturnDate(date);
  };
  return (
    <div>
      <div className="BookTicket">
        <div className="BookTicket__button1">
          <Button
            style={{
              borderRadius: "999px",
              fontWeight: "bold",
              backgroundColor: isChooseTrip ? "blue" : "transparent",
              color: "white",
              border: isChooseTrip ? "none" : "1px solid #ccc",
            }}
            className={`toggle-button ${isChooseTrip ? "active" : ""}`}
            onClick={() => setIsChooseTrip(true)}
          >
            Một chiều/Khứ hồi
          </Button>
          <Button
            style={{
              borderRadius: "999px",
              fontWeight: "bold",
              backgroundColor: !isChooseTrip ? "blue" : "transparent",
              color: !isChooseTrip ? "white" : "white",
              border: !isChooseTrip ? "none" : "1px solid #ccc",
            }}
            className={`toggle-button ${!isChooseTrip ? "active" : ""}`}
            onClick={() => setIsChooseTrip(false)}
          >
            Nhiều thành phố
          </Button>
        </div>
        <div className="BookTicket__button2">
          <Dropdown
            overlay={dropdownContent}
            trigger={["click"]}
            visible={isDropdownVisible}
            onVisibleChange={handleDropdownVisibleChange}
            placement="bottomLeft"
          >
            <Button
              type="text"
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
                color: "white",
                // padding: "5px 10px",
                // backgroundColor: "#f7f9fb",
              }}
            >
              <Space>
                <UserOutlined />
                {summary}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Select
            className="BookTicket__select"
            labelInValue
            defaultValue={{
              value: "Phổ thông",
              label: (
                <Space>
                  <Seat size={28} />
                  Phổ thông
                </Space>
              ),
            }}
            style={{
              width: 250,
              height: "42px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
            onChange={handleChange}
            options={[
              {
                value: "Phổ thông",
                label: (
                  <Space>
                    <Seat size={28} />
                    Phổ thông
                  </Space>
                ),
              },
              {
                value: "Phổ thông đặc biệt",
                label: (
                  <Space>
                    <Seat size={28} />
                    Phổ thông đặc biệt
                  </Space>
                ),
              },
              {
                value: "Thương gia",
                label: (
                  <Space>
                    <Seat size={28} />
                    Thương gia
                  </Space>
                ),
              },
              {
                value: "Hạng nhất",
                label: (
                  <Space>
                    <Seat size={28} />
                    Hạng nhất
                  </Space>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="BookTicket__all">
        <div className="BookTicket__sanbay" style={{ position: "relative" }}>
          <Space direction="vertical" size={0}>
            <label>Từ</label>
            <Select
              suffixIcon={null} // ẩn icon mặc định của antd
              value={from}
              onChange={(value) => setFrom(value)}
              style={{ width: 270, height: "50px" }}
            >
              {airports.map((airport) => (
                <Option key={airport.code} value={airport.name}>
                  {airport.name}
                </Option>
              ))}
            </Select>
          </Space>

          <Button
            type="default"
            icon={<SwapOutlined />}
            onClick={handleSwap}
            shape="circle"
            size="large"
            style={{
              position: "absolute",
              zIndex: 1,
              marginTop: "18px",
            }}
          />
          <Space direction="vertical" size={0}>
            <label>Đến</label>
            <Select
              suffixIcon={null}
              value={to}
              onChange={(value) => setTo(value)}
              style={{
                width: 270,
                height: "50px",
              }}
            >
              {airports.map((airport) => (
                <Option key={airport.code} value={airport.name}>
                  {airport.name}
                </Option>
              ))}
            </Select>
          </Space>
        </div>
        <div className="custom-date-picker">
          {/* <Space
                    direction="vertical"
                    size={12}
                    style={{ width: "100%", display: "flex" }}
                  > */}
          <div style={{ marginTop: "18px" }}>
            <Space direction="vertical" size={0}>
              <label style={{ paddingRight: 120 }}>Ngày khởi hành</label>
              <DatePicker
                locale={locale}
                disabledDate={disabledDate}
                onChange={handleDepartureDateChange}
                format="DD MMM YYYY"
                placeholder={moment().format("DD MMM YYYY")}
                style={{
                  width: "270px",
                  marginTop: "3px",
                  padding: 13,
                }}
              />
            </Space>
          </div>
          <div style={{ marginTop: "13px" }}>
            <Space direction="vertical" size={0}>
              {/* <label>Ngày về</label> */}
              <Checkbox
                style={{ paddingRight: 120 }}
                checked={isRoundTrip}
                onChange={(e) => setIsRoundTrip(e.target.checked)}
              >
                Khứ hồi
              </Checkbox>
              <DatePicker
                locale={locale}
                onChange={handleReturnDateChange}
                format="DD MMM YYYY"
                placeholder={moment().format("DD MMM YYYY")}
                style={{ width: "270px", padding: 13 }}
                disabled={!isRoundTrip}
              />
            </Space>
          </div>
          {/* </Space> */}
        </div>
      </div>
    </div>
  );
}

export default PlaneTrip;
