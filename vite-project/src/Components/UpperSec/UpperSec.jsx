import "./UpperSec.css";
import NAAC from "../../Images/logo/NAAC.jpg";
import clgSymbol from "../../Images/logo/clgSymbol.png"

function HeaderSec()
{   
    return (
        <header>

        <div id="header-part">
           <div className="Symbol">
                         <img src={NAAC} alt="NAAC-A" />

          </div>
            <h1 id="clgName">Kesharbai Lahoti <br />
                BCA Department</h1>
     <div className="Symbol">
               <img src={clgSymbol} alt="collegeSymbol" />

     </div>

      </div>

      
        </header>
            
     

        
    )
}

export default HeaderSec