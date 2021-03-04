import React from 'react';
import './Footer.css';
import {Link, withRouter} from 'react-router-dom';


class Footer extends React.Component {
  render() {
          
    return(
        <div>
            <footer className="permanent-footer">
      <div  className="permanent-footer-wrapper">
        <h3>Exoplore the BBC</h3>
        <div className="footer-nav-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Future</a></li>
            </ul>
            <ul>
              <li><a href="/news">News</a></li>
              <li><a href="#">Cluture</a></li>
            </ul>
            <ul>
              <li><a href="/sport">Sport</a></li>
              <li><a href="#">Music</a></li>
            </ul>
            <ul>
              <li><a href="#">Reel</a></li>
              <li><a href="#">TV</a></li>
            </ul>
            <ul>
              <li><a href="#">Worklife</a></li>
              <li><a href="#">Weather</a></li>
            </ul>
            <ul>
              <li><a href="#">Travel</a></li>
              <li href="#"><a>Sounds</a></li>
            </ul>
        </div>
        <div className="permanent-footer-mid">
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">About the BBC</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Accessibility Help</a></li>
            <li><a href="#">Parental Guidance</a></li>
            <li><a href="#">Contact the BBC</a></li>
            <li><a href="#">Get Persoanlised Newletters</a></li>
            <li><a href="#">Advertise with us</a></li>
            <li><a href="#">AdChoices / Do Not Sell My Info</a></li>
          </ul>
        </div>
        <p className="copy-right-footer"><em>Copyright &copy 2021 BBC.</em> The BBC is not reponsible for the content of external sites.<em>Read about our approach to external linking.</em></p>
      </div>
    </footer>
        </div>
    );

  }
}

export default Footer;