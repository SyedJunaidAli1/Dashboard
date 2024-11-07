import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { BiSupport } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { TbTransactionDollar } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation()
  const isActiveLink = (link) => {
    return location.pathname === link
  }

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbTransactionDollar,
      text: "Transactions",
      link: "/transactions",
    },
  ]
  return (
    <>
      <Stack justify="space-between" boxShadow={{ base: "none", lg: "lg" }} bg="white" w={{ base: "full", lg: "16rem" }} h={{ base: "100%", lg: "100vh" }}>
        <Box>
          <Heading as="h1" fontSize="20px" pt="3.5rem" textAlign="center">@DOSOMECODING</Heading>
          <Box mt="6" mx="3">
            {navLinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                  bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                  color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                  borderRadius="10px"
                  mx="3"
                  py="3"
                  px="4"
                  _hover={{
                    bg: "#F3F3F7",
                    color: "#171717",
                  }}
                >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
                </HStack>
              </Link>
            ))}
          </Box>
        </Box>
        <Box mt="6" mx="3" mb="6">
          <Link to="/support">
            <HStack
              borderRadius="10px"
              mx="3"
              py="3"
              px="4"
              bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
              color={isActiveLink("/support") ? "#171717" : "#797E82"}
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={BiSupport} />
              <Text fontSize="14px" fontWeight="medium" >Support</Text>
            </HStack>
          </Link>
        </Box>
      </Stack>
    </>
  )
}

export default Sidenav
