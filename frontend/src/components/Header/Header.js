
import style from './Header.module.css';
import './HeaderElements';


const Header = ({toggle}) => {
  return (
    <div className={style.header}> 
        <div className = {style.header_container}>
            <div className = {style.grid_container}>

                
                <div className = {style.header_logo_container}>
                    <div className = {style.header_logo} onClick = {toggle}>
                        <img src = "./pictures/SpreadTheWord-Logo-png.webp" alt = "logo"/>
                    </div>
                </div>

                <div className ={style.header_inner_container}>
                    <a className = {style.logo_texts} href = "https://www.spreadthewordbooks.com/">
                        <div className = "page-title-container">
                            <div className = {style.page_title_text}>
                                <span> SPREAD THE WORD </span>
                                
                            </div>
                        </div>
                        <div className = {style.page_slogan_container}>
                            <div className = {style.page_slogan_text}>
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