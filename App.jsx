// App.js
import React from 'react';
import FormularioExamen from './components/FormularioExamen';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <FormularioExamen />
    </div>
  );
};

export default App;
