import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

function App() {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Mixed" />
      <Pet name="Chewie" animal="Dog" breed="Chihuahua" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
