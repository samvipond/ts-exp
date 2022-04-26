import React from 'react'
import styled from 'styled-components';

import logo from '../assets/logo.svg'

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  h1 {
    margin: 0 0 0 10px;
  }
`

const Header = () => (
  <Wrapper>
    <img src={logo} alt="logo" />
    <h1>Planned Test</h1>
  </Wrapper>
)

export default Header
