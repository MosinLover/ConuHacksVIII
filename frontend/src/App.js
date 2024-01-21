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
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [amortizationYears, setAmortizationYears] = useState(25);
  const [amortizationMonths, setAmortizationMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [interestRate, setInterestRate] = useState(5);
  const [interestType, setInterestType] = useState('Fixed');
  const [interestTermYears, setInterestTermYears] = useState(5);
  const [interestTermMonths, setInterestTermMonths] = useState(0);
  const [principalData, setPrincipalData] = useState([]);
  const [principalWithInflationData, setPrincipalWithInflationData] = useState([]);

  const onSetMonthlyPayment = (payment) => {
    setMonthlyPayment(payment);
  }
  const onSetMortgageAmount = (payment) => {
    setMortgageAmount(payment);
  }
  const onSetAmortizationYears = (year) => {
    setAmortizationYears(year);
  }
  const onSetArmotizationMonths = (month) => {
    setAmortizationMonths(month);
  }
  const onSetPaymentFrequency = (freq) => {
    setPaymentFrequency(freq);
  }
  const onSetInterestRate = (rate) => {
    setInterestRate(rate);
  }
  const onSetInterestType = (type) => {
    setInterestType(type);
  }
  const onSetInterestTermYears = (x) => {
    setInterestTermYears(x);
  }
  const onSetInterestTermMonths = (x) => {
    setInterestTermMonths(x);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/calculator" element={<CalculatorPage setPrincipalData={setPrincipalData} setPrincipalWithInflationData={setPrincipalWithInflationData} setMonthlyPayment={onSetMonthlyPayment} setMortgageAmount={onSetMortgageAmount} setAmortizationYears={onSetAmortizationYears} setAmortizationMonths={onSetArmotizationMonths} setPaymentFrequency={onSetPaymentFrequency} setInterestRate={onSetInterestRate} setInterestType={onSetInterestType} setInterestTermYears={onSetInterestTermYears} setInterestTermMonths={onSetInterestTermMonths} monthlyPayment={monthlyPayment} mortgageAmount={mortgageAmount} amortizationYears={amortizationYears} amortizationMonths={amortizationMonths} paymentFrequency={paymentFrequency} interestRate={interestRate} interestType={interestType} interestTermYears={interestTermYears} interestTermMonths={interestTermMonths}  />} />
        <Route path="/dashboard" element={<DashboardPage principalData={principalData} principalWithInflationData={principalWithInflationData} monthlyPayment={monthlyPayment} mortgageAmount={mortgageAmount} amortizationYears={amortizationYears} amortizationMonths={amortizationMonths} paymentFrequency={paymentFrequency} interestRate={interestRate} interestType={interestType} interestTermYears={interestTermYears} interestTermMonths={interestTermMonths} />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
