import { Container } from "@chakra-ui/react"
import Postits from "../components/Postits"
import Navbar from "../components/Navbar"
import AddPostit from "../components/AddPostit"

export default function Home() {
  return (
    <div>
    <Container maxW="7xl">

      <Navbar />
      <AddPostit />
      <Postits />
    </Container>
    </div>
  )
}
