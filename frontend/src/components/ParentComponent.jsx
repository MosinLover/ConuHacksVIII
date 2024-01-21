import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, BrowserRouter } from 'react-router-dom';
import MortgageCalculator from './MortgageCalculator';
import Dashboard from './Dashboard';

const ParentComponent = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const onSetMonthlyPayment = (payment) => {
    setMonthlyPayment(payment);
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/calculator" element={<MortgageCalculator setMonthlyPayment={onSetMonthlyPayment} />} />
          <Route path="/dashboard" element={<Dashboard monthlyPayment={monthlyPayment} />} />
        </Routes>
      </BrowserRouter>
  );
};

export default ParentComponent;
