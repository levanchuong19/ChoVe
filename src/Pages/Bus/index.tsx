import { SwapOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Select, Space } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import moment from "moment";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import "./index.scss";

function BusTrip() {
  const { Option } = Select;
  const [seats, setSeats] = useState(1);
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

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      if (window.scrollY > 0) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [isChoose, setIsChoose] = useState(true);
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [, setDepartureDate] = useState<moment.Moment | null>(null);
  const [, setReturnDate] = useState<moment.Moment | null>(null);
  const disabledDate = (current: Dayjs) => {
    return current && current < dayjs().endOf("day");
    return current && current < moment().endOf("day");
  };

  const handleDepartureDateChange = (date: moment.Moment | null) => {
    setDepartureDate(date);
  };

  const handleReturnDateChange = (date: moment.Moment | null) => {
    setReturnDate(date);
  };

  return (
    <div className="BookTicket__Train">
      <div className="BookTicket__ga" style={{ position: "relative" }}>
        <div>
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
        </div>
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
        <div>
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
      </div>
      <div className="custom-date-picker">
        <div style={{ marginTop: "18px" }}>
          <Space direction="vertical" size={0}>
            <label style={{ paddingRight: 80 }}>Ngày khởi hành</label>
            <DatePicker
              locale={locale}
              disabledDate={disabledDate}
              onChange={handleDepartureDateChange}
              format="DD MMM YYYY"
              placeholder={moment().format("DD MMM YYYY")}
              style={{ width: "220px", marginTop: "3px", padding: 13 }}
            />
          </Space>
        </div>
        <div style={{ marginTop: "13px" }}>
          <Space direction="vertical" size={0}>
            <Checkbox
              style={{ paddingRight: 100 }}
              checked={isRoundTrip}
              onChange={(e) => setIsRoundTrip(e.target.checked)}
            >
              Khứ hồi
            </Checkbox>
            <DatePicker
              locale={locale}
              disabledDate={disabledDate}
              onChange={handleReturnDateChange}
              format="DD MMM YYYY"
              placeholder={moment().format("DD MMM YYYY")}
              style={{ width: "220px", padding: 13 }}
              disabled={!isRoundTrip}
            />
          </Space>
        </div>
        <div className="BookTicket__seats" style={{ marginTop: "20px" }}>
          <label style={{ width: 50, paddingRight: 80 }}>Số ghế</label>
          <Select
            value={seats}
            onChange={(value) => setSeats(value)}
            style={{ width: 140, height: "50px" }}
          >
            {[...Array(4).keys()].map((i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1} hành khách
              </Option>
            ))}
          </Select>
        </div>
        {/* <Button
      type="primary"
      icon={<SearchOutlined />}
      style={{ marginTop: "20px" }}
    >
      Tìm kiếm
    </Button> */}

        {/* </Space> */}
      </div>
    </div>
  );
}

export default BusTrip;
