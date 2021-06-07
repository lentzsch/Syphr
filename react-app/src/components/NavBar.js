import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignupFormModal from './SignupFormModal';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <div className="syphr-home">
          <NavLink to="/" exact={true} activeClassName="active">
            Syphr
          </NavLink>
        </div>
        <div className="auth-cluster">
          {/* <div> */}
            <LoginFormModal />
            {/* <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink> */}
          {/* </div>
          <div> */}
            <SignupFormModal />
            {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink> */}
          {/* </div> */}
          {/* <li>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </li> */}
          {/* <div> */}
            <LogoutButton />
          {/* </div> */}
       </div>
    </nav>
  );
}

export default NavBar;
