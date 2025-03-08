import React from 'react'
import Styles from './footer.module.scss'
import { Images } from '../../shared/utils/images'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Paths } from '../../browserRouter/paths/paths';
const Footer = () => {
  const navigate = useNavigate();
  const navigateContactUs = () => {
    navigate(Paths.Contactus)
  }
  const navigationLinks = [
    { name: 'About', path: Paths.About },
    { name: 'Contact', path: Paths.Contactus },
    { name: 'Blogs', path: Paths.Blogs },
    { name: 'Products', path: Paths.Products },
  ];
  return (
    <>
      <div className={Styles.containerFooter}>
        <div className={Styles.companyInfo}>
          <div className={Styles.footerTop}>
            <div className={Styles.imgInfo}>
              <img src={Images.pactLogo} className={Styles.bottomImg} />
              <div className={Styles.detailInfo}>
                <div className={Styles.iconText}>
                  <BiSolidPhoneCall color='#1C98CB' size={20} style={{margin:'2px 0 0 0'}} />
                  <div>
                    <div style={{letterSpacing:'2.5px',color:'#1b1464'}}>+91 8222822115</div>
                    <div style={{letterSpacing:'2.5px',color:'#1b1464'}}>+91 8222822116</div>
                  </div>
                  {/* <span>+91 8222822115</span> */}
                </div>
                <div className={Styles.iconText}>
                  <IoMailSharp color='#1C98CB' size={20} />
                  <span>contact@pacteazy.com</span>
                </div>
                <div className={Styles.iconText}>
                  <MdLocationPin color='#1C98CB' size={20} />
                  {/* <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span> */}
                  <span>Arundathi Nagar, Vizianagaram 535003, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
            <div className={Styles.listNav}>
              <h6>Company</h6>
              {/* <div>
                <span onClick={navigateAbout}>About</span>
                <span onClick={navigateContact}>Contact</span>
                <span onClick={navigateBlogs}>Blogs</span>
                <span onClick={navigateProducts}>Products</span>
              </div> */}
              <div>
                {navigationLinks.map(({ name, path }) => (
                  <span key={name}
                  // onClick={() => navigate(path)}
                  >{name}</span>
                ))}
              </div>
            </div>
            <div className={Styles.listNav}>
              <h6>Legal</h6>
              <div>
                <span>Privacy Policy</span>
                <span>Terms & Services</span>
                <span>Terms of Use</span>
              </div>
            </div>
            <div className={Styles.listNav}>
              <h6>Quick Links</h6>
              <div>
                <span>Techlabz Keybox</span>
                <span>Downloads</span>
                <span>Forum</span>
              </div>
            </div>
            <div className={Styles.cardInfo}>
              <div className={Styles.card}>
                <h6>Join Our Newsletter</h6>
                <div className={Styles.inputBtn}>
                  <input type="text" className={Styles.inputEmail} placeholder="Your email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="input-group-text" id="basic-addon2">Submit</button>
                </div>
                <p>Will send you weekly updates for your better tool management.</p>
              </div>
              <div className={Styles.headerSocial}>
                <h6>Follow us</h6>
                <div className={Styles.imagesSocialMedia}>
                  <div><img src={Images.facebook} alt="Facebook" /></div>
                  <div><img src={Images.instagram} alt="Instagram" /></div>
                  <div><img src={Images.xIcon} alt="X" /></div>
                  <div><img src={Images.youtube} alt="YouTube" /></div>
                  {/* <div><img src={Images.threads} alt="Threads" /></div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.textCopyRights}>Copyright 2023 <span>Pacteazy</span> - All Right Reserved</div>
        </div>
        <div className={Styles.footerBottom}>
          {/* <p>Have an idea you want to share with us? Let’s connect.</p>
          <button onClick={navigateContactUs}>
            <small>Contact Us</small>
          </button> */}

        </div>
      </div>
    </>
  )
}

export default Footer

