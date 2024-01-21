import React from 'react';
import MortgageCalculatorComponent from '../components/MortgageCalculatorComponent';
import { ChatBot } from '../components/ChatBot';
import { Box } from '@mui/material';
import './calculatorpage.css';

const CalculatorPage = ( {
  setMonthlyPayment, 
  setPrincipalData, 
  setPrincipalWithInflationData,
  setAmortizationYears,
  setAmortizationMonths,
  setPaymentFrequency,
  setMortgageAmount,
  setInterestRate,
  setInterestType,
  setInterestTermYears,
  setInterestTermMonths,
  monthlyPayment,
  mortgageAmount,
  amortizationYears,
  amortizationMonths,
  paymentFrequency,
  interestRate,
  interestType,
  interestTermYears,
  interestTermMonths,
} ) => {

  return (
    <div className="calculatorPage">
      <Box 
        padding={5}
      >
        <MortgageCalculatorComponent 
        setMonthlyPayment={setMonthlyPayment} 
        setPrincipalData={setPrincipalData}
        setPrincipalWithInflationData={setPrincipalWithInflationData}
        setMortgageAmount={setMortgageAmount} 
        setAmortizationYears={setAmortizationYears} 
        setAmortizationMonths={setAmortizationMonths} 
        setPaymentFrequency={setPaymentFrequency} 
        setInterestRate={setInterestRate} 
        setInterestType={setInterestType} 
        setInterestTermYears={setInterestTermYears} 
        setInterestTermMonths={setInterestTermMonths} 
        monthlyPayment={monthlyPayment} 
        mortgageAmount={mortgageAmount} 
        amortizationYears={amortizationYears} 
        amortizationMonths={amortizationMonths} 
        paymentFrequency={paymentFrequency} 
        interestRate={interestRate} 
        interestType={interestType} 
        interestTermYears={interestTermYears} 
        interestTermMonths={interestTermMonths}
        />
      </Box>
      <ChatBot/>
    </div>
  );
};

export default CalculatorPage;