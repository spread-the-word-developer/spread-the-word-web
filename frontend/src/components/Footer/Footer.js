
import './Footer.css';


function Footer() {
  return (
    <div className="footer"> 
        <div className = "footer-container">
            <div className = "follow-container">
                <span>
                    FOLLOW US
                </span>
            </div>
            <div className = "bar-container">

            </div>

            <div className = "media-container">
              <div className = "media-grid-container">


                <div className = "grid-item">

                  <div className = "grid-item-title">
                    <span>SOCIAL MEDIA</span>
                  </div>

                  <div className = "social-media-list-container">
                    <div className =  "social-media-list">
                      <li className =  "social-media-list-item">
                        <a href = "https://www.instagram.com/spreadthewordbookpublisher/?hl=es" target = "_blank">
                          <img src = 'pictures/insta.webp' alt = "instagram link" />
                        </a> 
                      </li>
                      <li className =  "social-media-list-item">
                        <a href = "https://twitter.com/SpreadtheWordEd" target = "_blank">
                          <img src = "pictures/twitter.webp" alt = "twitter link" />
                        </a> 
                      </li>
                      <li className =  "social-media-list-item">
                        <a href = "https://www.linkedin.com/company/spread-the-word-book-publisher" target = "_blank">
                          <img src = "pictures/linkedin.webp" alt = "linkedin link"/>
                        </a> 
                      </li>
                    </div>
                  </div>

                </div>


                <div className = "grid-item">
                  <div className = "grid-item-title">
                    <span> SUBSCRIBE </span>
                  </div>
                  <div className = "form-container">

                    <form className = "form-item" >
                      <input type = "text" id = "email" placeholder = "Enter your email here*" />
                    </form>
                  </div>

                  <button className = "form-button">
                    <span className = "form-button-text">
                      SUBSCRIBE
                    </span>
                  </button>

                  
                </div>


                <div className = "grid-item">
                  <div className = "grid-item-title">
                    <span>OR SEND US AN EMAIL</span>
                  </div>
                  <a className = "email-link" href = "mailto:TODO@ENTEREMAILHERE.com">
                    <div className = "email-link-text">
                      spreadthewordeditorial@gmail.com
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className = "copyright-container">
            © 2021 Spread the Word Editorial
            </div>
        </div>
    </div>
  );
}

export default Footer;