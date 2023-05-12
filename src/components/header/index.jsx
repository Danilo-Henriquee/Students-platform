import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from './styled';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.user.nome);

  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/login');
  }

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Register">
        <FaUserAlt size={20} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff color="white" size={24} />
        </Link>
      ) : (
        <Link to="/Login">
          <FaSignInAlt size={24} />
        </Link>
      )}

      <p>{isLoggedIn ? `Seja bem vindo ${userName}` : ''}</p>
    </Nav>
  );
}
