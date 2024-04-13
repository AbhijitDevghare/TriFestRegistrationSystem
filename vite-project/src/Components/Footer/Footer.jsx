
import "./Footer.css"
// import { Link } from "react-router-dom";

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faInstagram ,faFacebook} from '@fortawesome/free-brands-svg-icons';

function FooterSec()
{
    return (
        <>
       <footer > 
            <p>Follow us on -</p>  
              
            <div id="social">
                    <a href="https://www.instagram.com/kl_bca_3rd/">
                      <FontAwesomeIcon icon={faInstagram} className="logo" style={{ color: "#ff007b" }}  />
                    </a>

                    <a href="https://www.instagram.com/kl_bca_3rd/">
                        <FontAwesomeIcon icon={faFacebook} className="logo" style={{ color: "white" }} /> 
                    </a>           
                    
            </div>
            <p>Contact us-8208155446</p>
            <div id="rights-line"></div>
            <p>All Rights Reserved , KL , Amravati</p>        
       </footer>
        </>
    )
}


export default FooterSec