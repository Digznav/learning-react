import React, { useState } from 'react';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => {
              setLocation(event.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
