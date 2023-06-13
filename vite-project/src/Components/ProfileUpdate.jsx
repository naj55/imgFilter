import { React, useState } from 'react'
import { Flex, Box, Button, Input, Heading, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ProfileUpdate() {
    const [name, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setImg] = useState("")
    const Navigate = useNavigate()
    const Edit = () => {
        const id = localStorage.getItem("id")
        axios.put(`https://64876d1ebeba62972790a0f0.mockapi.io/data/users/${id}`, {
            name,
            email,
            avatar
        }).then(res => {
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("name", res.data.name)
            localStorage.setItem("email", res.data.email)
            localStorage.setItem("avatar", res.data.avatar)
            console.log(res.data)
        })
        Navigate('./Profile.jsx')
    }

    return (
        <>
            <Flex gap='5'>
                <Box w="30.5em" h="30em" bg="gray.200" mt="5em" id="signUpBox" >
                    <Heading textAlign="center" mt="1em" color="skyblue"> Edit</Heading>
                    <br></br>
                    <Flex justifyContent="center">
                        <Stack spacing={3} w="16em">
                            <Input bg="white" name="name" placeholder='user Name' onChange={(e) => setUserName(e.target.value)} />
                            <Input bg="white" name="email" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Input bg="white" name="img" placeholder='URL img' onChange={(e) => setImg(e.target.value)} />
                            <Button bg="skyblue" onClick={() => Edit()}> Edit</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
