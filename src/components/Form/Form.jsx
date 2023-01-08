import { useRef, useEffect } from "react"

import { toast, ToastContainer } from 'react-toastify'
import axios from "axios"

import * as styles from "./Form.styled"

const Form = ( { getUsers, onEdit, setOnEdit } ) => {
    const ref = useRef()

    useEffect(() => {
        if (onEdit) {
            const currentForm = ref.current;

            currentForm.name.value = onEdit.name
            currentForm.email.value = onEdit.email
            currentForm.phone.value = onEdit.phone
            currentForm.birthdate.value = onEdit.birthdate
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const currentForm = ref.current

        if (
            !currentForm.name.value ||
            !currentForm.email.value ||
            !currentForm.phone.value ||
            !currentForm.birthdate.value
        ) {
            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    name: currentForm.name.value,
                    email: currentForm.email.value,
                    phone: currentForm.phone.value,
                    birthdate: currentForm.birthdate.value
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data))
        } else {
            await axios
                .post("http://localhost:8800/", {
                    name: currentForm.name.value,
                    email: currentForm.email.value,
                    phone: currentForm.phone.value,
                    birthdate: currentForm.birthdate.value
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data))
        }

        currentForm.name.value = ""
        currentForm.email.value = ""
        currentForm.phone.value = ""
        currentForm.birthdate.value = ""

        setOnEdit(null)
        getUsers()
    }

    return (
        <styles.FormContainer ref={ref} onSubmit={handleSubmit}>
            <styles.InputArea>
                <styles.Label>Name</styles.Label>
                <styles.Input name="name"></styles.Input>
            </styles.InputArea>
            <styles.InputArea>
                <styles.Label>Email</styles.Label>
                <styles.Input name="email" type="email"></styles.Input>
            </styles.InputArea>
            <styles.InputArea>
                <styles.Label>Phone</styles.Label>
                <styles.Input name="phone"></styles.Input>
            </styles.InputArea>
            <styles.InputArea>
                <styles.Label>Birthdate</styles.Label>
                <styles.Input name="birthdate" type="date"></styles.Input>
            </styles.InputArea>
            <styles.Button type="submit">Add User</styles.Button>
        </styles.FormContainer>
    )
}

export default Form