import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';

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
            {/* <input className={inputClass} value={name} onChange={setNameCallback} onKeyPress={onKeyPressAddUser}/>*/}

            <SuperButton disabled={!name} red={error ? true : false} onClick={addUser}>Add</SuperButton>
            {/*<button onClick={addUser} disabled={!name}>add</button>*/}

            {!name && <div>Name is required {error}</div>}

            <div>total users:{totalUsers}</div>

        </div>
    )
}

export default Greeting
