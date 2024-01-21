import './App.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import LoginForm from './components/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import MortgageCalculatorComponent from './components/MortgageCalculatorComponent';
import CalculatorPage from './pages/CalculatorPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalData, setPrincipalData] = useState([]);
  const [principalWithInflationData, setPrincipalWithInflationData] = useState([]);


  const onSetMonthlyPayment = (payment) => {
    setMonthlyPayment(payment);
  }

  const onSetPrincipalData = (data) => {
    setPrincipalData(data);
  }

  const onSetPrincipalWithInflationData = (data) => {
    setPrincipalWithInflationData(data);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/calculator" element={<MortgageCalculatorComponent setMonthlyPayment={onSetMonthlyPayment}/>} /> */}
        <Route path="/calculator" element={
        <CalculatorPage 
          setMonthlyPayment={setMonthlyPayment}
          setPrincipalData={setPrincipalData}
          setPrincipalWithInflationData={setPrincipalWithInflationData}
          />} />
        <Route path="/dashboard" element={<DashboardPage 
        monthlyPayment={monthlyPayment} 
        principalData={principalData}
        principalWithInflationData={principalWithInflationData}

        />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
