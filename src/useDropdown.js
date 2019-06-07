import React, { useState } from 'react';

function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  function Dropdown() {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={event => setState(event.target.value)}
          onBlur={event => setState(event.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map(itm => (
            <option key={itm} value={itm}>
              {itm}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return [state, Dropdown, setState];
}

export default useDropdown;
