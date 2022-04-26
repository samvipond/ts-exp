import React from 'react'
import styled from 'styled-components';

import zoom from '../assets/zoom.png'

const Wrapper = styled.div`
  background: #fff;
  img {
    height: 25px;
  }
`

const Search = ({search, setSearch}) => {
  const handleSearch = (event) => {
    console.log('handleSearch [aha]!')
    if (event.target.value.length > 30) return
    const term = event.target.value
    console.log('your term is', term)
    setSearch(term ? term.toLowerCase() : '')
  }
  return (
    <Wrapper>
      <div class="input-group rounded">
        <span class="input-group-text border-0" id="search-addon">
          <img src={zoom} alt="search" />
        </span>
        <input type="search" class="form-control rounded" placeholder="Search Users" aria-label="Search" aria-describedby="search-addon" name="searchTerm" value={search} onInput={handleSearch}/>
      </div>
    </Wrapper>
  )
}

export default Search
