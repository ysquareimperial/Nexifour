import { Col, Row } from "reactstrap";
import "./App.css";
import logo from "../src/assets/na-white.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import na from "../src/assets/na.PNG";
function App() {
  return (
    <>
      <Row className="m-0" style={{ height: "100vh" }}>
        <Col md={1}></Col>
        <Col
          md={5}
          className="text-white d-flex justify-content-center gap-5 left_col"
        >
          <div>
            <img src={logo} alt="nexifour logo" className="logo" />
          </div>
          <div>
            <p>
              <b>Nexifour LLC is a technology company.</b>
            </p>
            <p>
              Nexifour Album is a platform that allows users to create and
              manage digital albums. <br />
              With features including members invitations, event organization,
              and financial contribution facilitation, it transforms the way
              people commemorate and share life's memorable moments.
            </p>
            <p>
              Nexifour Fund empowers politicians to share visions and supporters
              to crowdfund for candidates or causes. Through innovative design,
              Nexifour redefines digital interaction, fostering connections and
              contributions in personal and political spheres.
            </p>
          </div>
        </Col>
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center gap-5"
        >
          <img
            src={na}
            className="na"
            alt="nexifour logo"
            style={{ width: 100 }}
          />
          <img
            src={na}
            className="na"
            alt="nexifour logo"
            style={{ width: 100 }}
          />
        </Col>
        <Col md={1}></Col>
      </Row>

      <Row className="m-0" style={{ backgroundColor: "white" }}>
        <Col md={1}></Col>
        <Col md={10} className="p-3" style={{ fontSize: 12 }}>
          <div className="d-flex footer__">
            <p className="m-0 text-secondary">
              <b>&copy;2024 Nexifour LLC</b>
            </p>
            <p className="m-0">Privacy policy</p>
            <p className="m-0">Terms and conditions</p>
          </div>

          {/* Connect with us <br /> */}
          <p className="m-0 mt-4 d-flex gap-2 text-secondary">
            <FaXTwitter size={18} style={{ cursor: "pointer" }} />
            <FaFacebookF size={18} style={{ cursor: "pointer" }} />
            <FaInstagram size={18} style={{ cursor: "pointer" }} />
            <FaTiktok size={18} style={{ cursor: "pointer" }} />
            <FaLinkedinIn size={18} style={{ cursor: "pointer" }} />
          </p>
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
}

export default App;
