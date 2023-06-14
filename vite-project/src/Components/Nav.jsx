import React from 'react'
import { Button, Link, Flex, Heading, Box, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function Nav() {
    const id = localStorage.getItem("id")
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        Navigate('/')
    }
    return (
        <div>
            <Flex bg="gray.200" alignItems="center" gap="5" h="8em ">

                <Heading textAlign="center" ml="1em" color="skyblue"> Galary</Heading>
                <Spacer />
                {
                    id ? <Box direction="column">Hi <Button onClick={() => Navigate('/Profile')}>{localStorage.getItem("name")}</Button>  <Button m="1em" onClick={() => logout()}>Logout</Button> </Box> : <Button m="1em" onClick={() => Navigate('/SignUp')}> please SignUp </Button>
                }


            </Flex>


        </div>
    )
}
