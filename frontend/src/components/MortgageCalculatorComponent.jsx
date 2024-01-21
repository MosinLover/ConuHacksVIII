import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, formHelperTextClasses } from '@mui/material';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import "./mortgageCalculatorComponent.css";
import { useNavigate } from 'react-router-dom';

const MortgageCalculatorComponent = ( {setMonthlyPayment} ) => {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [amortizationYears, setAmortizationYears] = useState(25);
  const [amortizationMonths, setAmortizationMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [interestRate, setInterestRate] = useState(5);
  const [interestType, setInterestType] = useState('Fixed');
  const [interestTermYears, setInterestTermYears] = useState(5);
  const [interestTermMonths, setInterestTermMonths] = useState(0);

  const navigate = useNavigate();
  const handleCalculate = () => {
    // event.preventDefault();
    // Ensure all the necessary fields are filled in
    if (!mortgageAmount || !interestRate) {
      alert('Please fill in all required fields.');
      return;
    }
    const principal = parseFloat(mortgageAmount);
    const annualInterestRate = parseFloat(interestRate);
    const totalAmortizationMonths = parseInt(amortizationYears, 10) * 12 + parseInt(amortizationMonths, 10);
    const totalInterestTermMonths = parseInt(interestTermYears, 10) * 12 + parseInt(interestTermMonths, 10);

    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let monthlyPayment;

    if (interestType === 'Fixed') {
      // For a fixed-rate mortgage
      const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalAmortizationMonths);
      const denominator = Math.pow(1 + monthlyInterestRate, totalAmortizationMonths) - 1;
      monthlyPayment = principal * numerator / denominator;
    } else {
      // For a variable-rate mortgage, we will assume the rate is fixed for the 'interest term' duration and then recalculate
      // First, calculate the payment during the initial term
      let initialTermPayment;
      if (totalInterestTermMonths > 0) {
        const initialTermNumerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalInterestTermMonths);
        const initialTermDenominator = Math.pow(1 + monthlyInterestRate, interestTermMonths) - 1;
        initialTermPayment = principal * initialTermNumerator / initialTermDenominator;
      } else {
        // If no initial term is specified, treat it as a fixed-rate mortgage
        initialTermPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalAmortizationMonths));
      }
      
      // Assume the rate changes after the initial term
      // Here you would include logic to adjust the rate based on your specific variable rate terms
      // For simplicity, we are not adjusting the rate in this example
  
      // Calculate the remaining balance after the initial term
      const remainingBalance = principal * Math.pow(1 + monthlyInterestRate, interestTermMonths) - initialTermPayment * (Math.pow(1 + monthlyInterestRate, interestTermMonths) - 1) / monthlyInterestRate;
  
      // Recalculate the payment for the remaining term at the new rate
      const remainingMonths = totalAmortizationMonths - interestTermMonths;
      const remainingNumerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, remainingMonths);
      const remainingDenominator = Math.pow(1 + monthlyInterestRate, remainingMonths) - 1;
      const remainingTermPayment = remainingBalance * remainingNumerator / remainingDenominator;
  
      monthlyPayment = interestTermMonths > 0 ? initialTermPayment : remainingTermPayment; // This assumes a payment change after the initial term
    }
    setMonthlyPayment(monthlyPayment);
    console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
    navigate('/dashboard');
  };
  

  return (
    <Container maxWidth="sm" sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: "3px solid black"  }}>
      
        <Typography variant="h4" gutterBottom>
            Mortgage Payment Calculator
        </Typography>
        
        <Box 
          component="form" 
          onSubmit={handleCalculate} 
          noValidate 
          sx={{ mt: 1 }}
        >
            <h3>Mortgage Amount</h3>
            <Box sx={{
                '& > :not(style)': { m: 1, width: '52ch' },
              }}
            >
            <TextField
                label="Mortgage Amount"
                value={mortgageAmount}
                onChange={(e) => setMortgageAmount(e.target.value)}
                margin="normal"
                fullWidth
                variant="outlined"
            />
            </Box>

            <h3>Amortization Period</h3>
        
            <Box
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >                
              <FormControl fullWidth margin="normal">
                  <InputLabel id="amortization-period-years-label">Years</InputLabel>
                  <Select
                      labelId="amortization-period-years-label"
                      id="amortization-period-years"
                      value={amortizationYears}
                      onChange={(e) => setAmortizationYears(e.target.value)}
                      label="Years"
                  >
                      {[...Array(60).keys()].map((year) => (
                          <MenuItem key={year} value={year}>
                              {year} {year === 1 ? "Year" : "Years"}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                  <InputLabel id="amortization-period-months-label">Months</InputLabel>
                  <Select
                      labelId="amortization-period-months-label"
                      id="amortization-period-months"
                      value={amortizationMonths}
                      onChange={(e) => setAmortizationMonths(e.target.value)}
                      label="Months"
                  >
                      {[...Array(12).keys()].map((month) => (
                          <MenuItem key={month} value={month}>
                              {month} {month === 1 ? "Month" : "Months"}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
            </Box>

            <h3>Payment Frequency</h3>  
            <Box sx={{
                '& > :not(style)': { m: 1, width: '52ch' },
              }}>
              <FormControl fullWidth margin="normal">
                  {/* <InputLabel id="payment-frequency-label">Payment Frequency</InputLabel> */}
                  <Select
                      labelId="payment-frequency-label"
                      id="payment-frequency"
                      value={paymentFrequency}
                      onChange={(e) => setPaymentFrequency(e.target.value)}
                      // label="Payment Frequency"
                  >
                      {["Monthly", "Semi-Monthly", "Bi-Weekly", "Weekly"].map((frequency) => (
                          <MenuItem key={frequency} value={frequency}>
                              {frequency}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
            </Box>

            <h3>Interest Rate and Type</h3>
            <Box 
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                  label="Interest Rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
              />

              <FormControl fullWidth margin="normal">
                  <InputLabel id="interest-type-label">Interest Type</InputLabel>
                  <Select
                      labelId="interest-type-label"
                      id="interest-type"
                      value={interestType}
                      onChange={(e) => setInterestType(e.target.value)}
                      label="Interest Type"
                  >
                      {["Fixed", "Variable"].map((type) => (
                          <MenuItem key={type} value={type}>
                              {type}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
            </Box>

            <h3>Interest Term</h3>
            <Box 
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >

              <FormControl fullWidth margin="normal">
                  <InputLabel id="interest-term-years-label">Years</InputLabel>
                  <Select
                      labelId="interest-term-years-label"
                      id="interest-term-years"
                      value={interestTermYears}
                      onChange={(e) => setInterestTermYears(e.target.value)}
                      label="Years"
                  >
                      {[...Array(26).keys()].map((year) => (
                          <MenuItem key={year} value={year}>
                              {year} {year === 1 ? "Year" : "Years"}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                  <InputLabel id="interest-term-months-label">Months</InputLabel>
                  <Select
                      labelId="interest-term-months-label"
                      id="interest-term-months"
                      value={interestTermMonths}
                      onChange={(e) => setInterestTermMonths(e.target.value)}
                      label="Months"
                  >
                      {[...Array(12).keys()].map((month) => (
                          <MenuItem key={month} value={month}>
                              {month} {month === 1 ? "Month" : "Months"}
                          </MenuItem>
                      ))}
                  </Select>
              </FormControl>
            </Box>

            <button
              style={{
                marginTop: '1em',
                marginBottom: '0',
                fontSize: '1.2em',
                fontWeight: 'bold',
                padding: '12px 18px 12px 18px',
                borderRadius: '10px',
                color: 'white'
              }}
              onClick={handleCalculate}
            >
              Calculate
            </button>
        </Box>
      </Container>
  );
};

export default MortgageCalculatorComponent;
