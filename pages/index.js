import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar"
import AddPostit from "../components/AddPostit";
import Postits from "../components/Postits";

export default function Home() {
  return (
    <Container maxW="7xl">
      <Navbar />
      {/* <Auth /> */}

      <div className="flex pt-12">
        <div className="flex-1">
          <AddTodo />
          <TodoList />
        </div>
        <div className="flex-1">
          <AddPostit />
          <Postits />
        </div>
      </div>
    </Container>
  )
}
