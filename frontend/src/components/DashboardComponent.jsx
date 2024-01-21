import { Box, Grid, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react";


Chart.register(CategoryScale);

export const DashboardComponent = ( {monthlyPayment, principalData, principalWithInflationData, mortgageAmount, amortizationYears, amortizationMonths, paymentFrequency, interestRate, interestType, interestTermYears, interestTermMonths}) => {

    const navigate = useNavigate();
    
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if(chartRef.current){
                chartRef.current.destroy();
            }
        };
    },[]);

    console.log("DATA" + principalWithInflationData[60])

    const data = {
        labels: Array.from({length: amortizationYears * 12 + amortizationMonths}, (_, i) => `Month ${i + 1}`),
        datasets: [
          {
            label: 'Principal',
            data: principalData,
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
            pointStyle: false,
          },
          {
            label: 'Principal With Inflation',
            data: principalWithInflationData,
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
            pointStyle: false,
          }
        ]
      };


    return (
        <Box container spacing={2} sx={{border: '0.5px solid black'}}>
            <Grid item xs={6} sx={{ bgcolor: '#00738E'}}>
                <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection: 'column'}}>
                    <Typography variant="h3" sx={{color: 'white'}}>
                        <Box sx={{textAlign: 'center', padding: '20px'}}>
                            Your {paymentFrequency} Payment is {monthlyPayment.toFixed(2)}$
                        </Box>
                        </Typography>
                    <Box component='div' sx={{flexDirection: 'row'}}>
                        <Button variant='text' sx={{backgroundColor: 'black',color: 'white', marginBottom: '20px'}} onClick={() => navigate('/calculator')}>Edit Details</Button>
                        {/* <Button variant='text' sx={{color: 'white'}}>View Charts</Button> */}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{padding: '20px'}}>
                <Typography variant="h4">Your Mortgage Details...</Typography>
                <Box component='div' sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box mt={2}>Mortgage Amount: {mortgageAmount} $</Box>
                    <Box mt={2}>Interest Rate: {interestRate} %</Box>
                    <Box mt={2}>Amortization: {amortizationYears} Years and {amortizationMonths} Months</Box>
                    {/* <Box mt={2}>Interest Cost for the term:</Box>
                    <Box mt={2}>Total Interest Cost:</Box> */}
                </Box>
            </Grid>
            <Grid item xs = {12} sx={{padding: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Effect of Inflation on Mortgage Payments</h2>
                <Line 
                ref = {chartRef} 
                data={data} 
                options={{ 
                    scales: { y: { min: 0 }},
                    }}/>
            </Grid>
        </Box>
    )
}