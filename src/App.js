import { NavLink } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  const style = { paddingLeft: '.5rem' };
  return (
    <div>
      <h1>React Router</h1>
      <nav style={{ 
        borderBottom: 'solid 1px', 
        paddingBottom: '1rem',
        marginBottom: '1rem', 
      }}>
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/products" style={style}>Products</NavLink>
        <NavLink to="/about" style={style}>About</NavLink>
      </nav>
      <Home />
    </div>
  );
}

export default App;
