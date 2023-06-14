import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Flex, Button, Stack, Image, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState("")
    const Navigate = useNavigate()

    useEffect(() => {
        const id = localStorage.getItem("id")
        axios.get(`https://64876d1ebeba62972790a0f0.mockapi.io/data/users/${id}`).then(res => {
            setName(res.data.name),
                setEmail(res.data.email),
                setImg(res.data.avatar)
        })
    }, [])

    const userDelete = (id) => {
        axios.delete(`https://64876d1ebeba62972790a0f0.mockapi.io/data/users/${id}`).then(res => {
            setName(name.filter(del => {
                return del.id != id
            }))
        })
        localStorage.clear()
        Navigate('/')
    }

    return (
        <>
            <Flex gap='5'>
                <Box w="30.5em" h="30em" bg="gray.200" mt="5em" id="signUpBox" >
                    <Heading textAlign="center" mt="1em" color="skyblue"> Profile</Heading>
                    <br></br>
                    <Flex justifyContent="center">
                        <Stack spacing={3} w="16em">
                            <Box><Image id="profileImg" src={img} borderRadius="full"></Image></Box>
                            <Box h="2em" bg="white" borderRadius=".25em">{name}</Box>
                            <Box h="2em" bg="white" borderRadius=".25em" >{email}</Box>
                            <Button bg="skyblue" onClick={() => Navigate('/ProfileUpdate')}> Edit</Button>
                            <Button bg="skyblue" onClick={() => userDelete(localStorage.getItem("id"))}> Delete</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>

        </>

    )
}
