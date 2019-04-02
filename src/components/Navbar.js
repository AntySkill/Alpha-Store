import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../alpha64.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" align="left"/>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item-ml-5">
            <Link to='/' classname="nav-link">Products</Link> 
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            Cart
            <span className="ml-5"><i className="fas fa-shopping-cart"></i></span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
      
      
    )
  }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
height: 4.2rem;
a{
  color:var(--mainWhite)!important;
  font-size:1.4rem;
  margin-left: 50px;
}
`




