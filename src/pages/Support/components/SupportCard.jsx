import { Box, Flex, Icon, Stack, Text, } from "@chakra-ui/react"

const SupportCard = ({ leftComponent, icon, title, text }) => {
    return (
        <>
            <Flex gap="10" flexDirection={{
                base: "column",
                xl: "row"
            }}>
                <Stack maxW="22rem">
                    <Icon as={icon} boxSize="6" color="p.purple" />
                    <Text textStyle="h1" as="h1" fontWeight="medium">{title}</Text>
                    <Text textStyle="h6" fontSize="sm" color="black.60">{text}</Text>
                </Stack>
                <Stack  maxW="600px" w="full">
                    {leftComponent}
                </Stack>
            </Flex>
        </>
    )
}

export default SupportCard
