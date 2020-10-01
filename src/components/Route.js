// import React from 'react'; // only need this for JSX

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;