import React from 'react'

const AgeFilter = ({filter, setFilter}) => {

  const handleUpdate = (name, value) => {
    if (0 > value || value > 100) return
    setFilter({
      ...filter,
      [name]: Number(value),
    })
  }

  const setMin = (event) => handleUpdate('min', event.target.value)
  const setMax = (event) => handleUpdate('max', event.target.value)

  return (
    <div>
      Min: <input name="minAge" value={filter.min} type="number" onInput={setMin}/>
      Max: <input name="maxAge" value={filter.max} type="number" onInput={setMax} />
    </div>
  )
}

export default AgeFilter
