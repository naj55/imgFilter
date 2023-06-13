import { React, useState } from 'react'
import { Flex, Box, Button, Input, Heading, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    const [name, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const Navigate = useNavigate()

    const signUp = () => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name === "" || email === "" || password === "") {
            alert("please fill the inputs")
        } else if (password.length <= 3) {
            alert("password should be more than 3 entrey")
        } else if (email.match(validRegex)) {
            axios.post("https://64876d1ebeba62972790a0f0.mockapi.io/data/users", {
                name,
                email,
                password
            }).then(res => {
                console.log(res.data)
                localStorage.setItem("id", res.data.id)
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("email", res.data.email)
            })
            Navigate('/Galary')
        }

    }


    return (
        <>
            <Flex gap='5'>
                <Box w="30.5em" h="30em" bg="gray.200" mt="5em" id="signUpBox" >
                    <Heading textAlign="center" mt="1em" color="skyblue"> Sign Up</Heading>
                    <br></br>
                    <Flex justifyContent="center">
                        <Stack spacing={3} w="16em">
                            <Input bg="white" name="name" placeholder='user Name' onChange={(e) => setUserName(e.target.value)} />
                            <Input bg="white" name="email" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Input bg="white" name="password" type="password" placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                            <Button bg="skyblue" onClick={() => signUp()}> signUp</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </>


    )
}
