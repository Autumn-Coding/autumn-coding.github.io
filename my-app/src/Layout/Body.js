import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <div className="Body">
      <Outlet />
    </div>
  );
}

export default Body;