import React from 'react';
import MortgageCalculatorComponent from '../components/MortgageCalculatorComponent';
import { Box } from '@mui/material';
import './calculatorpage.css';

const CalculatorPage = ( {setMonthlyPayment, setPrincipalData, setPrincipalWithInflationData} ) => {

  return (
    <div className="calculatorPage">
      <Box 
        padding={5}
      >
        <MortgageCalculatorComponent 
        setMonthlyPayment={setMonthlyPayment} 
        setPrincipalData={setPrincipalData}
        setPrincipalWithInflationData={setPrincipalWithInflationData}
        />
      </Box>

    </div>
  );
};

export default CalculatorPage;