import React from 'react'

import Input from './Input'
import zoom from '../assets/zoom.png'

const Search = ({search, setSearch}) => {
  const handleSearch = (event) => {
    console.log('handleSearch [aha]!')
    if (event.target.value.length > 30) return
    const term = event.target.value
    console.log('your term is', term)
    setSearch(term ? term.toLowerCase() : '')
  }
  return (
    <Input img={zoom} value={search} onInput={handleSearch} type="search" placeholder="Search Users" label="Search" name="searchTerm" id="search-addon" />
  )
}

export default Search
