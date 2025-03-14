import { Button } from "antd";
// import Carousel from "../../Components/Carousel";
import "./index.scss";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import { Airplane, ArrowsLeftRight } from "@phosphor-icons/react";
import { Bus, Train } from "lucide-react";

import TrainTrip from "../Train";
import BusTrip from "../Bus";
import PlaneTrip from "../Plane";

function Home() {
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

  const [isChoose, setIsChoose] = useState<
    "plane" | "train" | "bus" | "transfer"
  >("plane");

  return (
    <div>
      <div>
        <div className="Home">
          <Header />
          <h1 className="text">
            Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
          </h1>
          <div className="Menu">
            <div className="menu">
              <ul>
                <Button
                  type="text"
                  style={{
                    borderRadius: "999px",
                    fontWeight: "bold",
                    backgroundColor:
                      isChoose === "plane"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    border: isChoose === "plane" ? "1px solid #ccc" : "none",
                  }}
                  className={`btn_menu ${isChoose === "plane" ? "active" : ""}`}
                  onClick={() => setIsChoose("plane")}
                >
                  <Airplane size={30} />
                  Vé máy bay
                </Button>
                <Button
                  type="text"
                  style={{
                    borderRadius: "999px",
                    fontWeight: "bold",
                    backgroundColor:
                      isChoose === "train"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    border: isChoose === "train" ? "1px solid #ccc" : "none",
                  }}
                  className={`btn_menu ${isChoose === "train" ? "active" : ""}`}
                  onClick={() => setIsChoose("train")}
                >
                  <Train size={30} />
                  Vé tàu hỏa
                </Button>
                <Button
                  type="text"
                  style={{
                    borderRadius: "999px",
                    fontWeight: "bold",
                    backgroundColor:
                      isChoose === "bus"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    border: isChoose === "bus" ? "1px solid #ccc" : "none",
                  }}
                  className={`btn_menu ${isChoose === "bus" ? "active" : ""}`}
                  onClick={() => setIsChoose("bus")}
                >
                  <Bus size={30} />
                  Vé xe khách
                </Button>
                <Button
                  type="text"
                  style={{
                    borderRadius: "999px",
                    fontWeight: "bold",
                    backgroundColor:
                      isChoose === "transfer"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                    border: isChoose === "transfer" ? "1px solid #ccc" : "none",
                  }}
                  className={`btn_menu ${
                    isChoose === "transfer" ? "active" : ""
                  }`}
                  onClick={() => setIsChoose("transfer")}
                >
                  <ArrowsLeftRight size={30} />
                  Chuyển nhượng vé
                </Button>
              </ul>
              <div className="trip-container">
                {isChoose === "plane" && <PlaneTrip />}
                {isChoose === "train" && <TrainTrip />}
                {isChoose === "bus" && <BusTrip />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home__img">
        <img
          width={1150}
          src="https://ik.imagekit.io/tvlk/image/imageResource/2024/12/12/1733986309208-1ddb3a3f379a310f642606e31d057244.png?tr=q-75,w-1280"
          alt=""
        />
      </div>
      <h1 className="h1Title">🔥Sale du lịch cuối năm</h1>
      <div className="Home__img">
        <img
          width={1150}
          src="https://ik.imagekit.io/tvlk/image/imageResource/2024/12/12/1733986401472-89e059ce0c3a157a57f83706eac37b37.jpeg?tr=q-75,w-1280"
          alt=""
        />
      </div>
      <h1 className="h1Title">Săn Vé Máy Bay Tết</h1>
      <div className="Home__img">
        <img
          width={1150}
          src="https://ik.imagekit.io/tvlk/image/imageResource/2024/10/28/1730105135557-1e591d7bd9f5cc5aec02b574e18f1f77.jpeg?tr=q-75,w-1280"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
