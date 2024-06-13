import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container container">
        <div className="footer_side_1">
          <h1 className="footer_title">Find Us On Instagram</h1>
          <p className="footer_side_1_text">
            @lagos_hotel
            <span>
              <FaInstagram />
            </span>
          </p>
        </div>
        <div className="foot_side_2">
          <img
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187662/1028379_ilopri.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_2"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187663/3659683_np4pyu.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_3"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718187662/6467621_jp8tkc.jpg"
            alt="footer_image"
          />
          <img
            className="footer_img_3"
            src="https://res.cloudinary.com/dxaujswz7/image/upload/v1718188000/2403017_yygsby.jpg"
            alt="footer_image"
          />
        </div>
      </div>
      <div className="footer_bottom_side">
        <ul className="footer_side_3 container">
          <li className="footer_link">TERMS OF USE</li>
          <li className="footer_link">PRIVACY POLICY</li>
          <li className="footer_link">ACCESSIBILITY</li>
          <li className="footer_link">CONTACT US</li>
          <li className="footer_link">FAQ</li>
        </ul>
        <p className="footer_side_4">
          &copy; Index_Zer0 [0] ALL RIGHTS RESERVED 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
