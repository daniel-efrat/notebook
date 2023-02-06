import { useToast } from "@chakra-ui/react"
import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebase"
import { FaTrash, FaCopy } from "react-icons/fa"
import { deletePostit } from "../api/postit"

const Postits = () => {
  const [postits, setPostits] = React.useState([])

  const { user } = useAuth()
  const toast = useToast()
  const refreshData = () => {
    if (!user) {
      setPostits([])
      return
    }
    const q = query(collection(db, "postits"))
    
    onSnapshot(q, (querySnapshot) => {
      let ar = []
      querySnapshot.docs.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() })
      })
      setPostits(ar)
    })
  }

  useEffect(() => {
    refreshData()
  }, [user])

  const handlePostitDelete = async (id) => {
    if (confirm("Are you sure you wanna delete this postit?")) {
      deletePostit(id)
      toast({ title: "Postit deleted successfully", status: "success" })
    }
  }
  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast({ title: "Copied to clipboard!", status: "success" })
      })
      .catch((error) => {
        toast({ title: "Could not copy to clipboard!", status: "error" })
      })
  }

  return (
    <div className="flex flex-col items-center w-full h-full gap-5 mt-5">
      {postits &&
        postits.map((postit) => (
          <div
            key={postit.id}
            className="relative p-5 bg-yellow-400 w-60 postit"
          >
            <FaCopy
              onClick={() => handleCopy(postit.content)}
              className="absolute text-blue-600 cursor-pointer left-4"
            />
            <FaTrash
              onClick={() => handlePostitDelete(postit.id)}
              className="absolute text-red-600 cursor-pointer right-4"
            />
            <p className="pt-6 text-black">{postit.content}</p>
          </div>
        ))}
    </div>
  )
}

export default Postits
