import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"

import axios from "axios"

import * as styles from "./Grid.styled"

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id )

                setUsers(newArray)
                toast.success(data)
            })
            .catch(({ data }) => toast.error(data))

        setOnEdit(null)
    }

    const handleEdit= (item) => {
        setOnEdit(item)
    }

    return (
        <styles.Table>
            <styles.Thead>
                <styles.Tr>
                    <styles.Th>Name</styles.Th>
                    <styles.Th>Email</styles.Th>
                    <styles.Th onlyWeb>Phone</styles.Th>
                    <styles.Th></styles.Th>
                    <styles.Th></styles.Th>
                </styles.Tr>
            </styles.Thead>
            <styles.Tbody>
                {users.map((user, i) => (             
                    <styles.Tr key={i}>
                        <styles.Td width="30%">{user.name}</styles.Td>
                        <styles.Td width="30%">{user.email}</styles.Td>
                        <styles.Td width="20%" onlyWeb>{user.phone}</styles.Td>
                        <styles.Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(user)}/>
                        </styles.Td>
                        <styles.Td alignCenter width="5%">
                            <FaTrash onClick={() => handleDelete(user.id)}/>
                        </styles.Td>
                    </styles.Tr>
                ))}
            </styles.Tbody>
        </styles.Table>
    )
}

export default Grid