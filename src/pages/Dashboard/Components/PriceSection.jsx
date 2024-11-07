import { Button, Flex, HStack, Icon, Image, Stack, Text, } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const PriceSection = () => {
    const time = ["7:15 PM", "7:55 PM", "8:00PM", "10:00PM", "10:15PM"]
    return (
        <>
            <CustomCard >
                <Flex justify="space-between"
                    spacing={{
                        base: 6,
                        xl: 16,
                    }}
                    flexDir={{
                        base: "column",
                        xl: "row",
                    }}
                    align="start"
                >
                    <Stack>
                        <HStack color="black.80">
                            <Text fontSize="sm">Current Price</Text>
                        </HStack>
                        <HStack>
                            <Text fontSize="24px" fontWeight="semibold">₹ 26,670.25</Text>
                            <HStack fontWeight="medium" color="green.400">
                                <Icon as={FaArrowTrendUp} />
                                <Text fontSize="sm" fontWeight="semibold">22%</Text>
                            </HStack>
                        </HStack>
                    </Stack>
                    <HStack >
                        <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
                        <Button rightIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
                    </HStack>
                </Flex >
                <Tabs variant='soft-rounded' >
                    <Flex justify="end" >
                        <TabList bg="black.5" p="3px">
                            {
                                ["1H", "1D", "1W", "1M"].map((tab) => (
                                    <Tab _selected={{bg:"white"}}
                                    key={tab} fontSize="sm" p="6px" borderRadius="4" >
                                        {tab}
                                    </Tab>
                                ))
                            }
                        </TabList>
                    </Flex>
                    <TabPanels>
                        <TabPanel>
                            <Image src="/Graph.png" w="100%" mt="48px" />
                            <HStack justify="space-between">
                                {time.map((timestamp) => (
                                    <Text key={timestamp} fontSize="sm" color="black.80" >{timestamp}</Text>
                                ))}
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </CustomCard >
        </>
    )
}

export default PriceSection
