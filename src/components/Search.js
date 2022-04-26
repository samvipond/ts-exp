import React from 'react'

const Search = ({search, setSearch}) => {
  const handleSearch = (event) => {
    console.log('handleSearch [aha]!')
    if (event.target.value.length > 30) return
    const term = event.target.value
    console.log('your term is', term)
    setSearch(term ? term.toLowerCase() : '')
  }
  return (
    <input name="searchTerm" value={search} onInput={handleSearch}/>
  )
}

export default Search
