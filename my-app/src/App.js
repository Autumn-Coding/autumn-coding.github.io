import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { Home, HomeHeader } from './Home';
import { About, AboutHeader } from './About';


function App() {
  return (
    <BrowserRouter className="mainBody">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
