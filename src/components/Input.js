import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  margin: 0 0 20px 0;
  span {
    min-width: 55px;
  }
  img {
    height: 25px;
  }
`

const Input = ({img, value, onInput, name, placeholder, type, label, pre, id}) => (
  <Wrapper>
    <div className="input-group rounded">
      <span className="input-group-text border-0" id={id}>
        {img && <img src={img} alt="search" />}
        {pre}
      </span>
      <input
        type={type}
        className="form-control rounded"
        placeholder={placeholder}
        aria-label={label}
        name={name}
        value={value}
        onChange={onInput}
      />
    </div>
  </Wrapper>
)

export default Input
