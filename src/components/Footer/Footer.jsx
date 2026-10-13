import Socials from "../Socials/Socials";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <Socials />
        <div className="footer-links">
          <div className="footer-link-item">
            <a href="">Audio Description</a>
          </div>
          <div className="footer-link-item">
            <a href="">Help Centre</a>
          </div>
          <div className="footer-link-item">
            <a href="">Gift Cards</a>
          </div>
          <div className="footer-link-item">
            <a href="">Media Centre</a>
          </div>
          <div className="footer-link-item">
            <a href="">Investor Relations</a>
          </div>
          <div className="footer-link-item">
            <a href="">Jobs</a>
          </div>
          <div className="footer-link-item">
            <a href="">Terms of Use</a>
          </div>
          <div className="footer-link-item">
            <a href="">Privacy</a>
          </div>
          <div className="footer-link-item">
            <a href="">Legal Notices</a>
          </div>
          <div className="footer-link-item">
            <a href="">Cookie Preferences</a>
          </div>
          <div className="footer-link-item">
            <a href="">Corporate Information</a>
          </div>
          <div className="footer-link-item">
            <a href="">Contact Us</a>
          </div>
        </div>

        <div className="service-code">
          <a href="">Service Code</a>
        </div>
        <div className="copyright">&copy; 1997-2025 Netflix, Inc.</div>
      </div>
    </>
  );
}

export default Footer;
