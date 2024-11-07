import { Box, Button, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Topnav = ({ title, onOpen }) => {
    return (
        <>
            <Box px="4" bg="white">
                <HStack maxW="70rem" mx="auto" h="16" justify="space-between" >
                    <Icon as={FaBars} onClick={onOpen} fontSize="22px" cursor="pointer" display={{
                        base: "block",
                        lg: "none"
                    }} />
                    <Heading fontWeight="bold" fontSize="28px">{title}</Heading>
                    <Menu>
                        <MenuButton as={Button}>
                            <FaRegUser fontSize="24px" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Support</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>
        </>

    )
}

export default Topnav
