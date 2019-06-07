import React, { useState } from 'react';

function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  function valueHandler(event) {
    setState(event.target.value);
  }

  function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select id={id} value={state} onChange={valueHandler} onBlur={valueHandler} disabled={!options.length}>
          <option>All</option>
          {options.map(function setOptionTag(itm) {
            return (
              <option key={itm} value={itm}>
                {itm}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  return [state, Dropdown, setState];
}

export default useDropdown;
