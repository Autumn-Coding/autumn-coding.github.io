import { Outlet, Link } from 'react-router-dom';import { useLayoutEffect } from 'react';

function Body() {
  return (
    <div className="Body">
      <Outlet />
    </div>
  );
}

export default Body;