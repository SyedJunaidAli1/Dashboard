import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../Components/DashboardLayout"
import PortfolioSection from "./Components/PortfolioSection"
import PriceSection from "./Components/PriceSection"
import TransationSection from "./Components/TransationSection"
import InfoCard from "./Components/InfoCard"

const Dashboard = ({ }) => {
    return (
        <>
            <DashboardLayout title="Dashboard">
                <Grid gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(2, 1fr)",
                }}
                    gap={6}
                >
                    <GridItem colSpan={{
                        base: 1,
                        xl: 2
                    }}>
                        <PortfolioSection />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <PriceSection />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <TransationSection />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <InfoCard imgUrl="\Visual.svg" text={"Learn more about Loans - Keep your Bitcon, access it's value without selling it"} tagText="Loan" inverted={false} />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <InfoCard imgUrl="\Visual.png" text={"Learn more about our real estate, mortgage, and  corporate account services"} tagText="Contact" inverted={true} />
                    </GridItem>
                </Grid>
            </DashboardLayout>
        </>

    )
}

export default Dashboard
