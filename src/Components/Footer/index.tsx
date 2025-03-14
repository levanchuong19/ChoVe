import "./index.scss";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <footer className="footer">
          <div className="footer__left">
            <img
              className="img"
              src="https://i.ibb.co/g9PBhC3/67ab3167-421f-4d8f-9b7a-42b417174381.webp"
              alt=""
            />
            <div>
              <ul>
                <li>
                  <h4>Liên kết</h4>
                </li>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <li>
                    <img
                      src="https://static.chotot.com/storage/default/facebook.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://static.chotot.com/storage/default/youtube.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://static.chotot.com/storage/default/linkedin.svg"
                      alt=""
                    />
                  </li>
                </div>
                <li>
                  <h4>Chứng nhận</h4>
                </li>
                <li>
                  <img
                    src="https://static.chotot.com/storage/default/certificate.webp"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
          <ul>
            <li>
              <h4>Về Chợ Vé</h4>
            </li>
            <li>Giới thiệu</li>
            <li>Quy chế hoạt động sàn</li>
            <li>Chính sách bảo mật</li>
            <li>Giải quyết tranh chấp</li>
            <li>Truyền thông</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>
              <h4>Hỗ trợ khách hàng</h4>
            </li>
            <li>Trung tâm trợ giúp</li>
            <li>An toàn mua bán</li>
            <li>Liên hệ hỗ trợ</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
