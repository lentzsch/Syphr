import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DemoButton from './auth/DemoButton';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignupFormModal from './SignupFormModal';
import { clearSearch, searchCodeNames } from '../store/conversation';
import SearchResults from './SearchResults';
import './NavBar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const [_, setSearch] = useState("");
  const user = useSelector(state => state.session.user);

  const onChange = ({ target: { value } }) => {
      setSearch(value);
      if (value) {
        dispatch(searchCodeNames(value));
      } else {
        dispatch(clearSearch());
      };
  };

  return (
    <nav className="nav-bar">
      <div className="fade" >
        <div className="syphr-home">
          <NavLink to="/" exact={true} activeClassName="active">
            Syphr
          </NavLink>
        </div>
       { user && <div className="search-bar">
          <div className="search-input-button-container">
            <input className="search-field"
                   type="text"
                   required
                   onChange={onChange}
                   placeholder="Search Code Name"
            />
            {/* <button style={{ display: "hidden" }} ref={buttonRef} type="submit">Search</button> */}
          </div>
          <SearchResults />
        </div> }
        <div className="auth-cluster">
           {!user && <DemoButton /> }
           {!user && <LoginFormModal /> }
           {!user && <SignupFormModal /> }
           { user && <LogoutButton /> }
       </div>
       </div>
       {/* <div className="fade"/> */}
    </nav>
  );
};

export default NavBar;
