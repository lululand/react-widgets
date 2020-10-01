import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => { // e handler receives event object
    if (event.metaKey || event.ctrlKey) { // booleans - t or f if key pressed
      return;  // so if true, return early, we don't want to run below functions
    }

    event.preventDefault(); // prevent full-page reload default behavior
    window.history.pushState({}, '', href); // function built in to browser, changes the url
    
    // tell route components that url changed
    const navEvent = new PopStateEvent('popstate'); 
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;