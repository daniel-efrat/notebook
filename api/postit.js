import { db } from "../firebase"
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore"

const addPostit = async ({ userId, content, status }) => {
  try {
    await addDoc(collection(db, "postits"), {
      user: userId,
      content: content,
      status: status,
      createdAt: new Date().getTime(),
    })
  } catch (err) {}
}

const togglePostitStatus = async ({ docId, status }) => {
  try {
    const postitRef = doc(db, "postits", docId)
    await updateDoc(postitRef, {
      status,
    })
  } catch (err) {
    console.log(err)
  }
}

const deletePostit = async (docId) => {
  try {
    const postitRef = doc(db, "postits", docId)
    await deleteDoc(postitRef)
  } catch (err) {
    console.log(err)
  }
}

export { addPostit, togglePostitStatus, deletePostit }
