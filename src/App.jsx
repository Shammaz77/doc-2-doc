import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import './index.css'
import './App.css'
import Home from './pages/Home';
// import

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  </Routes>
);

export default App
