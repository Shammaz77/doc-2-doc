import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import './App.css'
// import

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  </Routes>
);

export default App
