import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

function SearchParams() {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(
    function updateBreeds() {
      setBreeds([]);
      setBreed('');

      // TODO: Check when animal is 'All'.
      // `All` causes to API to fail.
      console.log(animal);

      pet
        .breeds(animal)
        .then(function updateBreedsState({ breeds = [] }) {
          // API fails when `animal` is equal to `All`. Making `breeds` undefined.
          // Using default value for now.
          console.log(breeds);
          const breedNames = breeds.map(function getBreedName({ name }) {
            return name;
          });
          setBreeds(breedNames);
        })
        .catch(console.error);
    },
    [animal, setBreed, setBreeds]
  );

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
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
