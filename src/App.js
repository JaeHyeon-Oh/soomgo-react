import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchPro from './components/SearchPro';
import Signup from './components/Register/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path='/search/pro' element={<SearchPro />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
