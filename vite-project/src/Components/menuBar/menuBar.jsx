import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const logout = async () => {
    try {
      const resp = await fetch("http://localhost:8081/logout", {
        method: "GET",
        credentials: "include"
      });
      if (resp.ok) {
        // Redirect to the login page after successful logout
        navigate('/login');
      } else {
        // Handle login error
        console.error("Login failed:", resp.statusText);
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <div className="menu-bar" onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        {isMenuOpen && (
          <div id="menuOptions">
            <ul>
              <Link to={`/`} className="linkTag">
                <li>Home</li>
              </Link>

              <p></p>
              <Link to={'/about'} className="linkTag">
                <li>About</li>
              </Link>

              <p></p>
              <li onClick={logout}>Logout</li>
              <p></p>
              <Link to={`/admin`}>
              <li className="linkTag" > Admin Options</li>
              </Link>
              <p></p>
              <Link to={`/account`}>
              <li className="linkTag">Account</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default MenuBar;
