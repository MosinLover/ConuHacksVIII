import { Box, Grid, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const DashboardComponent = ( {monthlyPayment, mortgageAmount, amortizationYears, amortizationMonths, paymentFrequency, interestRate, interestType, interestTermYears, interestTermMonths}) => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={2} sx={{border: '0.5px solid black'}}>
            <Grid item xs={6} sx={{ bgcolor: '#00738E'}}>
                <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:'center', height: '100vh', flexDirection: 'column'}}>
                    <Typography variant="h3" sx={{color: 'white'}}>
                        <Box sx={{textAlign: 'center'}}>
                            Your Monthly Payment is {monthlyPayment.toFixed(2)}$
                        </Box>
                        </Typography>
                    <Box component='div' sx={{flexDirection: 'row'}}>
                        <Button variant='text' sx={{color: 'white'}} onClick={() => navigate('/calculator')}>Edit Details</Button>
                        <Button variant='text' sx={{color: 'white'}}>View Charts</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">Your Mortgage Details...</Typography>
                <Box component='div' sx={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
                    <Box mt={2}>Mortgage Amount: {mortgageAmount}</Box>
                    <Box mt={2}>Interest Rate: {interestRate}</Box>
                    <Box mt={2}>Amortization: {amortizationYears} years and {amortizationMonths} months</Box>
                    <Box mt={2}>Interest Cost for the term:</Box>
                    <Box mt={2}>Total Interest Cost:</Box>
                </Box>
            </Grid>
        </Grid>
    )
}