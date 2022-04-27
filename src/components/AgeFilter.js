import React from 'react'
import Input from './Input'

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
      <Input value={filter.min} type="number" onInput={setMin} pre="Min" label="min" name="min" />
      <Input value={filter.max} type="number" onInput={setMax} pre="Max" label="max" name="max" />
      {/* Max: <input name="maxAge" value={filter.max} type="number" onInput={setMax} /> */}
    </div>
  )
}

export default AgeFilter
