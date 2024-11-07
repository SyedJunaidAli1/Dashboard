import { FormControl, FormLabel, } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Box, Button, Card, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react"

const ContactCard = () => {
    return (
        <>
            <Card p="6" borderRadius="1rem" minW={{
                base: "22rem",
                xl: "34rem",
            }} >
                <Text fontWeight="medium" fontSize="sm">
                    You will receive response within 24 hours of time of submit.
                </Text>

                <HStack display="flex" flexDirection="column" alignItems="start">
                    <Stack flexDirection="row" w="100%">
                        <FormControl >
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Enter your Name.." />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Surename</FormLabel>
                            <Input placeholder="Enter your Surename.." />
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your Email.." />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Messages</FormLabel>
                        <Textarea h="8rem" placeholder="Enter your Messages.." />
                    </FormControl>
                    <CheckboxGroup colorScheme="purple">
                        <Checkbox>
                            <Text fontSize="xs">
                                I agree with
                                <Box as="span" color="p.purple"> Terms & Conditions.</Box>
                            </Text>
                        </Checkbox>
                    </CheckboxGroup>
                    <Stack w="full">
                        <Button>Send a Message</Button>
                        <Button colorScheme="gray">Book a Meeting</Button>
                    </Stack>
                </HStack>
            </Card>
        </>
    )
}

export default ContactCard
