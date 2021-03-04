import React from 'react';
import './Nav.css';
import {Link, withRouter} from 'react-router-dom';


class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <nav>
        <Link className="link" to="/">
          <div className="nav-logo">
               <a   className="bbc" href="#">
                   <span>B</span>
                   <span>B</span>
                   <span>C</span>
               </a>
               <a className="nav-user-icon" href="#">
                   <i class="fa fa-user fa-2x"> &nbsp;<span className="sign-in" id="hidden-for-responsive">Sign In</span></i>
               </a>
           </div>
        </Link>
           
           <ul className="nav-ul">

              <Link className="link" to="/">
                <li>
                   <a href='/'>Home</a>
                 </li>
              </Link>
               <Link className="link" to="/news">
                   <li>
                      <a href='/news'>News</a>
                   </li>
               </Link>
               <Link className="link"  to="/sport">
                   <li id="hidden-for-responsive">
                      <a href='/sport'>Sport</a>
                   </li>
               </Link>
               <Link className="link"  to="/reel">
                   <li  id="hidden-for-responsive">
                      <a href='#'>Reel</a>
                   </li>
               </Link>
               <Link className="link"  to="/travel">
                   <li  id="hidden-for-responsive">
                      <a href='#'>Travel</a>
                   </li>
               </Link>
               <Link className="link"  to="/future">
                   <li  id="hidden-for-responsive">
                      <a href='#'>Future</a>
                   </li>
               </Link>
               <Link className="link"  to="/culture">
                   <li  id="hidden-for-responsive">
                      <a href='#'>Culture</a>
                   </li>
               </Link>
               <Link className="link"  to="/more">
                   <li className="more">
                      <a href='#'>More</a>
                      <a><i class="fa fa-caret-down"></i></a>
                   </li>
               </Link>
           </ul>
           <div>
               <input id="hidden-for-responsive"
                   placeholder="Search"
               />
           </div>
         </nav>  
      </div>
    );
  }
  }
  

export default Nav;