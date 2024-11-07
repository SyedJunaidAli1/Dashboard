import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { FaRupeeSign } from "react-icons/fa";
import { PiCurrencyBtcFill } from "react-icons/pi";

const TransationSection = () => {
    const Transactions = [
        {
            id: "1",
            icon: FaRupeeSign,
            text: "Inr Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2024-06-09 7:06 PM"
        },
        {
            id: "2",
            icon: PiCurrencyBtcFill,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2024-05-27 12:32 PM"
        },
        {
            id: "3",
            icon: FaRupeeSign,
            text: "Inr Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2024-02-27 12:32 PM"
        },
    ]
    return (
        <>
            <CustomCard h="full">
                <Text fontSize="sm" mb="6" color="black.80">
                    Recent Transactions
                </Text>
                <Stack spacing="4">
                    {Transactions.map((trans, index) => (
                        <div key={trans.id} >
                            {index != 0 && <Divider mb="4" />}
                            <Flex fontSize="md" gap="4">
                                <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                    <Icon as={trans.icon} ></Icon>
                                </Grid>
                                <Flex justify="space-between" width="full">
                                    <Stack spacing="0">
                                        <Text textStyle="h6" fontWeight="medium" color="black.80">
                                            {trans.text}
                                        </Text>
                                        <Text fontSize="sm" color="black.80">
                                            {trans.timestamp}
                                        </Text>
                                    </Stack>
                                    <Text textStyle="h6" fontWeight="medium" color="black.80">
                                        {trans.amount}
                                    </Text>
                                </Flex>
                            </Flex>
                        </div>
                    ))}
                </Stack>
                <Button w="full" mt="8" colorScheme="gray">View All</Button>
            </CustomCard>
        </>
    )
}

export default TransationSection
