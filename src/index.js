import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FunctionalityContextWrapper from './Context/FunctionalityContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FunctionalityContextWrapper>
      <App />
    </FunctionalityContextWrapper>
  
);


