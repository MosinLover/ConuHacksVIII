import { DashboardComponent } from "../components/DashboardComponent"
import { Box } from "@mui/material"

export const DashboardPage = ( {monthlyPayment, principalData, principalWithInflationData, mortgageAmount, amortizationYears, amortizationMonths, paymentFrequency, interestRate, interestType, interestTermYears, interestTermMonths} ) => {
    return (
        <Box marginTop={5} marginBottom={5} marginLeft={5} marginRight={5}>
            <DashboardComponent monthlyPayment={monthlyPayment} principalData={principalData} principalWithInflationData={principalWithInflationData} mortgageAmount={mortgageAmount} amortizationYears={amortizationYears} amortizationMonths={amortizationMonths} paymentFrequency={paymentFrequency} interestRate={interestRate} interestType={interestType} interestTermYears={interestTermYears} interestTermMonths={interestTermMonths}/>
        </Box>
    )
}