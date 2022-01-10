import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import ServicesCollection from './Pages/Services/ServicesCollection';
import Footer from './Pages/Share/Footer/Footer';
import Navbar from './Pages/Share/Navbar/Navbar';
import Team from './Pages/Team/Team';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/services' element={<ServicesCollection />} />
            <Route path='/details/:serviceId' element={<PrivateRoute><ServiceDetails />
            </PrivateRoute>} />
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
