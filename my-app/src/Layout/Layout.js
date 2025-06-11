import Body from './Body';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <Header />
        <Body>
            <Outlet />
        </Body>
    </>
  );
}

export default Layout;