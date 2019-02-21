import React from "react";
import { Element } from "react-scroll";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <Element id="footer" className="footer">
        <div className="footer-list-wrapper">
          <ul>
            <h5>Resource</h5>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Forum</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
          <ul>
            <h5>Legal</h5>
            <li>
              <p>Terms of Use</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Security</p>
            </li>
            <li>
              <p>Help Center</p>
            </li>
          </ul>
          <ul>
            <h5>Account</h5>
            <li>
              <p>My Account</p>
            </li>
            <li>
              <p>Watchlist</p>
            </li>
            <li>
              <p>Collection</p>
            </li>
            <li>
              <p>User Guide</p>
            </li>
          </ul>
          <ul className="newsletter">
            <h5>NewsLetter</h5>
            <li className="newsletter-text">
              <p>
                Subscribe to our newsletter to get <br /> latest movie updates
              </p>
            </li>
            <li className="newsletter-input">
              <input type="text" placeholder="enter email " />
              <p>Subscribe now ></p>
            </li>
          </ul>
        </div>
        <div className="social-icon-wrapper">
          <div>
            <i className="fab fa-facebook-f" />
            <p>Facebook</p>
          </div>
          <div>
            <i className="fab fa-google-plus-g" />
            <p>Google+</p>
          </div>
          <div>
            <i className="fab fa-linkedin-in" />
            <p>Linkedin</p>
          </div>
          <div>
            <i className="fab fa-twitter" />
            <p>Twitter</p>
          </div>
        </div>
      </Element>
    );
  }
}

export default Footer;
