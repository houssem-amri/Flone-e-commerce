import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../User_contex';

export default function NavBar() {
let history=useHistory()
  const { CurrentUser, setCurrentUser } = useContext(UserContext);
const logout=()=>{
  localStorage.removeItem("current_user");
  setCurrentUser({})
  history.push(" ")
}
  return (
  <div className="app-header header-shadow">
  <div className="app-header__logo">
    <div className="logo-src" />
    <div className="header__pane ml-auto">
      <div>
        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </div>
  </div>
  <div className="app-header__mobile-menu">
    <div>
      <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  </div>
  <div className="app-header__menu">
    <span>
      <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
        <span className="btn-icon-wrapper">
          <i className="fa fa-ellipsis-v fa-w-6" />
        </span>
      </button>
    </span>
  </div>
  <div className="app-header__content">
    <div className="app-header-left">
      <div className="search-wrapper">
        <div className="input-holder">
          <input type="text" className="search-input" placeholder="Type to search" />
          <button className="search-icon"><span /></button>
        </div>
        <button className="close" />
      </div>
      <ul className="header-menu nav">
            <li className="nav-item">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link"
              >
                <i className="nav-link-icon fa fa-database"> </i>
                Statistics
              </a>
            </li>
            <li className="btn-group nav-item">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="nav-link"
              >
                <i className="nav-link-icon fa fa-edit" />
                Projects
              </a>
            </li>
            <li className="dropdown nav-item">
              <a
                href="#"
                onClick={() => logout()}
                className="nav-link"
              >
                <i className="nav-link-icon pe-7s-back-2" />
                Logout
              </a>
            </li>
          </ul>
    </div>
    <div className="app-header-right">
      <div className="header-btn-lg pr-0">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <div className="btn-group">
                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                  <img width={42} className="rounded-circle" src="assets/img/9.jpg" alt="/" />
                  <i className="fa fa-angle-down ml-2 opacity-8" />
                </a>
                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                  <button type="button" tabIndex={0} className="dropdown-item">
                    User Account
                  </button>
                  <button type="button" tabIndex={0} className="dropdown-item">
                    Settings
                  </button>
                  <h6 tabIndex={-1} className="dropdown-header">Header</h6>
                  <button type="button" tabIndex={0} className="dropdown-item">
                    Actions
                  </button>
                  <div tabIndex={-1} className="dropdown-divider" />
                  <button type="button" tabIndex={0} className="dropdown-item">
                    Dividers
                  </button>
                </div>
              </div>
            </div>
            <div className="widget-content-left ml-3 header-user-info">
              <div className="widget-heading">{CurrentUser.userNom} {CurrentUser.userPrenon}</div>
              <div className="widget-subheading">{CurrentUser.role}</div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
