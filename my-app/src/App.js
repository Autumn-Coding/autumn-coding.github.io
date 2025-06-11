import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { Home, HomeHeader } from './Pages/Home';
import { About, AboutHeader } from './Pages/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
