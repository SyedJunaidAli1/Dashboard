import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";


const PortfolioSection = () => {
    return (
        <>
            <HStack bg="white" justify="space-between" borderRadius="xl" p="6"
                flexDir={{
                    base: "column",
                    xl: "row",
                }}
                align={{
                    base: "flex-start",
                    xl: "flex-end"
                }}
                spacing={{
                    base: 6,
                    xl: 0,
                }}
            >
                <HStack spacing={{
                    base: 6,
                    xl: 16,
                }}
                    flexDir={{
                        base: "column",
                        xl: "row",
                    }}
                    align={{
                        base: "flex-start",
                        xl: "flex-end"
                    }}>
                    <Stack>
                        <HStack color="black.80">
                            <Text fontSize="sm">Total Portfolio Value</Text>
                            <Icon as={AiOutlineInfoCircle} />
                        </HStack>
                        <Text fontSize="24px" fontWeight="semibold">₹ 112,312.24</Text>
                    </Stack>

                    <Stack>
                        <HStack color="black.80">
                            <Text fontSize="sm">Wallet Balances</Text>
                        </HStack>
                        <HStack
                            spacing={{
                                base: 6,
                                xl: 4,
                            }}
                            flexDir={{
                                base: "column",
                                xl: "row",
                            }}
                            align={{
                                base: "flex-start",
                                xl: "flex-end"
                            }}>
                            <HStack>
                                <Text fontSize="24px" fontWeight="semibold">22.39401000</Text><Tag fontWeight="semibold" colorScheme="gray">BTC</Tag>
                            </HStack>
                            <HStack>
                                <Text fontSize="24px" fontWeight="semibold">₹ 1,300.00</Text><Tag fontWeight="semibold" colorScheme="gray">INR</Tag>
                            </HStack>
                        </HStack>
                    </Stack>
                </HStack >

                <HStack >
                    <Button leftIcon={<Icon as={FaArrowDown} />}>Deposit</Button>
                    <Button rightIcon={<Icon as={FaArrowUp} />}>Withdraw</Button>
                </HStack>
            </HStack >
        </>
    )
}

export default PortfolioSection
