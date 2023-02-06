import React from "react"
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react"
import useAuth from "../hooks/useAuth"
import { addPostit } from "../api/postit"
const AddPostit = () => {

  const [content, setContent] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const toast = useToast()

  const { isLoggedIn, user } = useAuth()

  const handlePostitCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a postit",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      return
    }
    setIsLoading(true)
    const postit = {
      content,
      status,
      userId: user.uid,
    }
    await addPostit(postit)
    setIsLoading(false)

    setContent("")

    toast({ title: "Postit created successfully", status: "success" })
  }

  return (
    <Box w="60%" margin={"0 auto"} display="block" mt={5}>
      <Stack direction="column">
       

        <Textarea
          placeholder="New Postit"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          onClick={() => handlePostitCreate()}
          disabled={content.length < 1 || isLoading}
          variantColor="teal"
          variant="solid"
        >
          Add
        </Button>
      </Stack>
    </Box>
  )
}

export default AddPostit
