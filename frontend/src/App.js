import './App.css';
import Button from '@mui/material/Button';
import LoginForm from './components/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import MortgageCalculator from './components/MortgageCalculatorComponent.jsx';

function App() {

  return (
    <div>
      <DashboardPage />
      <MortgageCalculator />
    </div>
  );
}

export default App;
