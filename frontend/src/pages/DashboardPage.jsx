import { DashboardComponent } from "../components/DashboardComponent"
import { Box } from "@mui/material"

export const DashboardPage = ( {monthlyPayment} ) => {
    return (
        <Box marginTop={5} marginBottom={5} marginLeft={5} marginRight={5}>
            <DashboardComponent monthlyPayment={monthlyPayment}/>
        </Box>
    )
}