import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import Lineage from './context/Lineage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lineage.Provider
      value={{
        grandMa: "Patty",
        grandPa: "Jim",
      }}
    >
      <App />
    </Lineage.Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

