import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const value = e.currentTarget.value
        setName(value)
        setError('')
    }
    const addUser = () => {
        const errors = /^[a-z_-]{3,16}$/gi
        const userName = name.trim()

        if (errors.test(userName) && userName !== '') {
            alert(`Hello ${userName} !`)
            addUserCallback(userName)
            setName('')
        } else {
            setError(name)
        }
    }
    
    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) addUser()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddUser={onKeyPressAddUser}
        />
    )
}

export default GreetingContainer
