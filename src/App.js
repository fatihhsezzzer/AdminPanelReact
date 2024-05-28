import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';


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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
