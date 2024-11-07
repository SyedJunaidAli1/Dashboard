import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, TabIndicator, Tag } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransectionTable from './Components/TransectionTable';
import { FaSearch } from "react-icons/fa";

const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ]
  return (
    <>
      <DashboardLayout title="Transactions">
        <Flex justify="end" mb="4" >
          <Button leftIcon={<Icon as={IoCloudDownloadOutline} />} >Export CSV</Button>
        </Flex>
        <Card borderRadius="1rem">
          <Tabs position='relative' variant='unstyled'>
            <TabList p="4" display="flex" justifyContent="space-between" >
              <HStack>
                {tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" >{tab.name}
                    <Tag colorScheme='gray' borderRadius="full" >{tab.count}</Tag>
                  </Tab>
                ))}
              </HStack>
              <InputGroup maxW="200px" >
                <InputLeftElement pointerEvents='none'>
                  <Icon as={FaSearch} />
                </InputLeftElement>
                <Input type='tel' placeholder='Search...' />
              </InputGroup>

            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='p.purple' borderRadius='1px' />
            <TabPanels>
              <TabPanel>
                <TransectionTable />
              </TabPanel>
              <TabPanel>
                <TransectionTable />
              </TabPanel>
              <TabPanel>
                <TransectionTable />
              </TabPanel>
              <TabPanel>
                <TransectionTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  )
}

export default Transactions
