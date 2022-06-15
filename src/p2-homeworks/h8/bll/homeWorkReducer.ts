import {UserType} from '../HW8';

type ActionType =
    { type: 'sort', payload: 'up' }
    | { type: 'sort', payload: 'down' }
    | { type: 'check', payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                const newState = [...state]
                return newState.sort((a, b) => b.name > a.name ? -1 : 1)
            }
            if (action.payload === 'down') {
                const newState = [...state]
                return newState.sort((a, b) => a.name > b.name ? -1 : 1)
            }
            else return state
        }
        case 'check': {
            // need to fix
            return state.filter(s => s.age > action.payload ? s : '')
        }
        default:
            return state
    }
}

