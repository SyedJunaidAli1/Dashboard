import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Stack, Text, Tag, } from '@chakra-ui/react'

const TransectionTable = () => {
    const TableData = [
        {
            id: "HD82NA2H",
            date: "2024-10-09",
            time: "04:30 PM",
            type: {
                name: "INR Depost",
                tag: "E-Transfer",
            },
            amount: {
                amount: "+ ₹81,123.10",
            },
            status: "pending",
        },
        {
            id: "ZG82NA2H",
            date: "2024-10-07",
            time: "02:30 PM",
            type: {
                name: "INR Withdraw",
                tag: "Wire Transfer",
            },
            amount: {
                amount: "- ₹55,123.10",
            },
            status: "processing",
        },
        {
            id: "HD82NA2H",
            date: "2024-10-04",
            time: "09:30 AM",
            type: {
                name: "Buy",
            },
            amount: {
                amount: "+ 12.48513391 BTC",
                tag: "- $81,123.10",
            },
            status: "cancelled",
        },
        {
            id: "HD82NA2H",
            date: "2024-10-03",
            time: "01:32 PM",
            type: {
                name: "Sell",
            },
            amount: {
                amount: "- 0.36401628 BTC",
                tag: "+ $19,378.84",
            },
            status: "completed",
        },
        {
            id: "HD82NA2H",
            date: "2024-10-04",
            time: "09:30 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: {
                amount: "+ 4.13946104 BTC",
                tag: "+ $37,929.31",
            },
            status: "completed",
        },
        {
            id: "HD82NA2H",
            date: "2024-10-01",
            time: "09:30 AM",
            type: {
                name: "BTC Withdraw",
            },
            amount: {
                amount: "- 10.00000000 BTC",
                tag: "- $62,017.58",
            },
            status: "completed",
        },
    ]

    const BgstatusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
    }
    return (
        <>
            <TableContainer>
                <Table variant='simple' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Date & Time</Th>
                            <Th>Type</Th>
                            <Th>Amount</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody color="p.black">
                        {
                            TableData.map((data) => (
                                <Tr key={data.key} >
                                    <Td fontSize="md" fontWeight="medium">{data.id}</Td>
                                    <Td>
                                        <Stack spacing={0}>
                                            <Text fontSize="md" fontWeight="medium">{data.date}</Text>
                                            <Text fontSize="xs" color="black.80">{data.time}</Text>
                                        </Stack>
                                    </Td>
                                    <Td>
                                        <Stack spacing={0}>
                                            <Text fontSize="md" fontWeight="medium">{data.type.name}</Text>
                                            <Text fontSize="xs" color="black.80">{data.type?.tag}</Text>
                                        </Stack>
                                    </Td>
                                    <Td>
                                        <Stack spacing={0}>
                                            <Text fontSize="md" fontWeight="medium">{data.amount.amount}</Text>
                                            <Text fontSize="xs" color="black.80">{data.amount?.tag}</Text>
                                        </Stack>
                                    </Td>
                                    <Td fontSize="md" fontWeight="medium">
                                        <Tag bg={BgstatusColor[data.status]} color="white" borderRadius="full">{data.status}</Tag>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TransectionTable
