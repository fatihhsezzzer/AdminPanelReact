import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import ProductList from './Components/Pages/ProductList';
import AddBlog from './Components/Pages/AddBlog';

import Header from './Components/SingleComponents/Header';
import Sidebar from './Components/SingleComponents/Sidebar';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/add-product" element={<AddBlog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
