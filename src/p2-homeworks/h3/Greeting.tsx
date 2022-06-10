import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <p>В имени могут быть только латинские буквы, символы "_" и "-". Длина имени должна быть не меньше 3 и не
                больше 16 символов.</p>
            <p>The name can only contain Latin letters, the characters "_" and "-". The length of the name must be at
                least 3 and no more than 16 characters.</p>

            <SuperInputText value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser} error={error}/>
            <SuperButton disabled={!name} red={!!error} onClick={addUser}>Add</SuperButton>
            {/* <input className={inputClass} value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser}/>*/}
            {/*<button onClick={addUser} disabled={!name}>add</button>*/}

            {!name && <div>Name is required {error}</div>}

            <div>total users:{totalUsers}</div>

        </div>
    )
}

export default Greeting
