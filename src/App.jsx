import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import './index.css'
import './App.css'
import Home from './pages/Home';
import UniversityListing from './pages/UniversityListing';
import UniversityDetail from './pages/UniversityDetail';
import News from './pages/News';
import ContactUs from './pages/ContactUs';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="university-listing" element={<UniversityListing />} />
      <Route path="university-detail" element={<UniversityDetail />} />
      <Route path="news" element={<News />} />
      <Route path="contact-us" element={<ContactUs />} />
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  </Routes>
);

export default App
