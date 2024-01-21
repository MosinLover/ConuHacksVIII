import './App.css';
import Button from '@mui/material/Button';
import LoginForm from './components/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/home" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
