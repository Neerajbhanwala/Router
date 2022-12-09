import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <>
    <div className='main-header'>
<ul>
    <Link to='/'><li className='hd'>Home</li></Link>
    <Link to='/About'><li className='hd'>About</li></Link>
    <Link to='/Services'><li className='hd'>Services</li></Link>
    <Link to='/Contact'><li className='hd'>Contact</li></Link>
    <a href="https://twitter.com/i/flow/login" target="_"><li><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
    <a href="https://www.facebook.com/" target="_"><li><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
    <a href="https://www.linkedin.com/" target="_"><li><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
    <a href="https://github.com/" target="_"><li><i class="fa fa-github" aria-hidden="true"></i></li></a>
  </ul>
  </div>
  </>
  )
}

export default Header
