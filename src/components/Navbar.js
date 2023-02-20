import {Link} from "react-router-dom"
import {useContext} from "react"
import ThemeContext ,{ themes } from "../context/ThemeContext";

function Navbar(){
  const {name: themeName, color, backgroundColor, setTheme} = useContext(ThemeContext)
    return (
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ablist">
                    ablist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                    登入
                    </Link>
                  </li>
                </ul>
                <button type="button" class="btn btn-primary"  style={{color, backgroundColor}} onClick={()=>{
                  if(themeName==='dark'){ setTheme(themes.light)}else{
                    setTheme(themes.dark)
                  }
                }} >Primary</button>
              </div>
            </div>
          </nav>
        </div>
      );
}
export default Navbar