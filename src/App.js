import { NavLink } from 'react-router-dom';

function App() {
  const style = { paddingLeft: '.5rem' };
  return (
    <div>
      <h1>React Router</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem', }}>
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/products" style={style}>Products</NavLink>
        <NavLink to="/about" style={style}>About</NavLink>
      </nav>
    </div>
  );
}

export default App;
