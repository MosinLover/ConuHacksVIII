import './App.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import LoginForm from './components/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import MortgageCalculatorComponent from './components/MortgageCalculatorComponent';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const onSetMonthlyPayment = (payment) => {
    setMonthlyPayment(payment);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/calculator" element={<MortgageCalculatorComponent setMonthlyPayment={onSetMonthlyPayment}/>} />
        <Route path="/dashboard" element={<DashboardPage monthlyPayment={monthlyPayment} />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
