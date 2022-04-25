import React from 'react';

const AgeFilter = () => {
  const cool = true
  return (
    <div>
      min: <input name="minAge" value="0" type="number" />
      max: <input name="maxAge" value="100" type="number" />
      <button type="button">Filter by age</button>
    </div>
  )
}

export default AgeFilter
