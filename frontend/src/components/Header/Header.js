
import './Header.css';


function Header() {
  return (
    <div className="header"> 
        <div className = "header-container">
            <div className = "grid-container">
                
                
                <div className = "header-logo-container">
                    <div className = "header-logo">
                        <img src = "./pictures/SpreadTheWord-Logo-png.webp" alt = "logo"/>
                    </div>
                </div>

                <div className ="header-inner-container">
                    <a className= "logo-texts" href = "https://www.spreadthewordbooks.com/">
                        <div className = "page-title-container">
                            <div className ="page-title-text">
                                <span> SPREAD THE WORD </span>
                                
                            </div>
                        </div>
                        <div className = "page-slogan-container">
                            <div className ="page-slogan-text">
                                The Digital Book Publisher
                            </div> 
                        </div>
                    </ a>
                </div>

            </div>


        </div>
    </div>
  );
}

export default Header;