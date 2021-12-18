import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import ServicesCollection from './Pages/Services/ServicesCollection';
import Footer from './Pages/Share/Footer/Footer';
import Navbar from './Pages/Share/Navbar/Navbar';
import Team from './Pages/Team/Team';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/services' element={<ServicesCollection />} />
            <Route path='/team' element={<Team />} />
            <Route path='/home' element={<Home />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
