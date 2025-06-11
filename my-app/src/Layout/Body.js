import { useLayoutEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

function Body() {
  return (
    <div className="Body">
      <Outlet />
    </div>
  );
}

export default useLayoutEffect;