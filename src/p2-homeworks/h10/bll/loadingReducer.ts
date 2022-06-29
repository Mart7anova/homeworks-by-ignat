const initState = {
    isLoading: false
}
export type initStateType = typeof initState

export const loadingReducer = (state: initStateType  = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {isLoading: action.isLoading}
        }
        default: return state
    }
}
type loadingAT = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {type: 'LOADING', isLoading} as const
}// fix any