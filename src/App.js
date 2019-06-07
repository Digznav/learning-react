import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

function App() {
  return React.createElement('div', { id: 'something important' }, [
    React.createElement('h1', {}, 'Adopt me !'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'dog',
      breed: 'Mixed'
    }),
    React.createElement(Pet, {
      name: 'Chewie',
      animal: 'dog',
      breed: 'Chihuahua'
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'cat',
      breed: 'Mixed'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
