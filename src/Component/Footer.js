import React from 'react'
import '../Styles/Footer.css'

function Footer() {
  return (
    <>
    <div className='main-footer w-100 mt-1'>
      <div className='w-50 flt p-5 h-100'>
          <span style={{fontSize:"42px", fontFamily:"elephant"}}>Don't Miss Out</span><br />
          <span>Sign up for the latest updates, news, product, samples and coupons.</span><br /> <br />
          <span><b>EMAIL ADDRESS :</b></span>
          <span className='left'><b>BIRTHDAY :</b></span><br />
          <input type="text" placeholder="Enter your email..." />
          <input type="date" />
          <button className='footer-btn mt-3'>Sign up</button> <br /> <br />
          <span>This site is created and maintained by Mr. Neeraj Bhanwala with using react. We understand your feelings and design our UI as reality.</span>
          <br /> <br />
          <span className='footer-icon'><i class="fa fa-instagram" aria-hidden="true"></i></span>
          <span className='footer-icon'><i class="fa fa-facebook"></i></span>
          <span className='footer-icon'><i class="fa fa-twitter" aria-hidden="true"></i></span>
          <a href="https://in.linkedin.com/" target="-"><span className='footer-icon'><i class="fa fa-linkedin" aria-hidden="true"></i></span></a>
          <a href="https://github.com/" target="-"><span className='footer-icon'><i class="fa fa-github" aria-hidden="true"></i></span></a>
      </div>
      <div className='w-50 flt h-100'>

      <table>
<tr>
  <th>Company</th>
  <th>Contact</th>
  <th>Country</th>
</tr>
<tr>
  <td>Citladu</td>
  <td>+27-0600-123-456</td>
  <td>Germany</td>
</tr>
<tr>
  <td>Berglunds snabbköp</td>
  <td>+76-5678-123-789</td>
  <td>Sweden</td>
</tr>
<tr>
  <td>Centro comercial</td>
  <td>+54-5678-876-345</td>
</tr>
<tr>
  <td></td>
  <td>+21-9564-984-238</td>
</tr>
</table>
        </div>
    </div>
    <div className='footer-bottom'>
    <ul className='ftr'>
      <li>Map</li>
      <li>Privacy</li>
      <li>Terms</li>
      <li>Permission</li>
      <li>Condition</li>
    </ul>
    </div>
    <div className='last container text-center'>This site is created for Indian customers. This website created on react.</div>
  </>
  )
}

export default Footer
