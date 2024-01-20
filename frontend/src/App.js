import './App.css';
import Button from '@mui/material/Button';
import LoginForm from './components/LoginForm';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';


function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
