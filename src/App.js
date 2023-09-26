import { Routes, Route, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

function App() {
  const style = ({ isActive }) => ({ 
    paddingLeft: '.5rem',
    fontWeight: isActive ? 'bold' : 'normal',
  });
  return (
    <div>
      <h1>Super Cool Products for Sale!</h1>
      <nav style={{ 
        borderBottom: 'solid 1px', 
        paddingBottom: '1rem',
        marginBottom: '1rem', 
      }}>
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/products" style={style}>Products</NavLink>
        <NavLink to="/about" style={style}>About</NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <h5 style={{ borderTop: 'solid 1px', paddingTop: '1rem' }}>
        &copy; 2023 Super Cool Products, LLC
      </h5>
    </div>
  );
}

// components are not required to be placed in a separate file
const NoMatch = () => {
  return (
    <div>
      The path requested has <strong>NO MATCH</strong> page
    </div>
  );
};

export default App;
