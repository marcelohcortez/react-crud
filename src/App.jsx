import { useState, useEffect } from 'react'

import { toast, ToastContainer } from 'react-toastify'
import axios from "axios"

import Form from "./components/Form/Form"
import Grid from "./components/Grid/Grid"

import GlobalStyle from './Global.styled'
import * as styles from "./App.styled"

import "react-toastify/dist/ReactToastify.css"

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])
  

  return (
      <>
        <styles.Container>
          <styles.Title>USERS</styles.Title>
          <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
          <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
        </styles.Container>
        <ToastContainer autoCLose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
        <GlobalStyle />
      </>
  )
}

export default App
