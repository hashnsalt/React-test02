import './App.css';
import './Pages/page.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className='App'>
      <ul className='lnb'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/members'>Members</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='members/*' element={<Members />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
