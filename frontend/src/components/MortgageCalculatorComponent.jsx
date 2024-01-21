import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, formHelperTextClasses } from '@mui/material';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import "./mortgageCalculatorComponent.css";
import { useNavigate } from 'react-router-dom';

const MortgageCalculatorComponent = ( {setMonthlyPayment, setPrincipalData, setPrincipalWithInflationData} ) => {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [amortizationYears, setAmortizationYears] = useState(25);
  const [amortizationMonths, setAmortizationMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [interestRate, setInterestRate] = useState(5);
  const [interestType, setInterestType] = useState('Fixed');
  const [interestTermYears, setInterestTermYears] = useState(5);
  const [interestTermMonths, setInterestTermMonths] = useState(0);

  let principalData = [parseFloat(mortgageAmount)];
  let principalWithInflationData = [parseFloat(mortgageAmount)];

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
    const freq = paymentFrequency === 'Monthly' ? 12 : paymentFrequency === 'Bi-Weekly' ? 26 : 52;
    let calculatedInterestRate = Math.pow(( 1 + annualInterestRate/100), 1/freq) - 1;

    // console.log("calcultaed: " + calculatedInterestRate)
    let monthlyPayment;

    // For a fixed-rate mortgage
    const numerator = 1 - Math.pow(1/(1+calculatedInterestRate), freq * parseInt(amortizationYears, 10));
    const denominator = calculatedInterestRate;
    monthlyPayment = principal / (numerator / denominator);
  
    setMonthlyPayment(monthlyPayment);
    console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
    navigate('/dashboard');

    for (let i = 0; i < freq * parseInt(amortizationYears, 10); i++) {
      let presentValue = principalData[i];
      let interestPayment = presentValue * (1 + calculatedInterestRate);
      let principal = interestPayment - monthlyPayment;
      principalData.push(principal); 
    }

    principalData.push(freq, amortizationYears, amortizationMonths)

    for (let i = 0; i < freq * parseInt(amortizationYears, 10); i++) {
      let presentValue = principalWithInflationData[i];
      let interestPayment = presentValue * (1 + calculatedInterestRate - 0.03);
      let principalWithInflation = interestPayment - monthlyPayment;
      principalWithInflationData.push(principalWithInflation);
    }

    principalWithInflationData.push(freq, amortizationYears, amortizationMonths)

    setPrincipalData(principalData);
    setPrincipalWithInflationData(principalWithInflationData);

    // console.log(principalWithInflationData);
    // console.log(principalWithInflationData[300]);

  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#F3F3F3', borderRadius: '20px' 
    }}>
    <h3 style={{fontSize: '30px', marginBottom: '20px'}} > Mortgage Payment Calculator</h3>
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
                      {["Monthly", "Bi-Weekly", "Weekly"].map((frequency) => (
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
