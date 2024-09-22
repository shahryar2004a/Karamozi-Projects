import React from 'react'

export default function Selector({ label, options, selectedValue, onChange }) {
  return (
    <div className='select-container'>
           <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.id || option} value={option.id || option}>
            {option.name || option}
          </option>
        ))}
      </select>
    </div>
  )
}
