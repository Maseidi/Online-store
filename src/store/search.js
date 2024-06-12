import { CHANGE_CATEGORY, CHANGE_MAX_PRICE, CHANGE_MIN_PRICE, CHANGE_TITLE } from "./actions"

export const searchCommand = {
    title: '',
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    category: ''
}

export const searchReducer = (state, action) => {
    if ( action.type === CHANGE_TITLE ) return {...state, title: action.payload.newValue}
    else if ( action.type === CHANGE_MIN_PRICE ) return {...state, minPrice: action.payload.newValue}
    else if ( action.type === CHANGE_MAX_PRICE ) return {...state, maxPrice: action.payload.newValue}
    else if ( action.type === CHANGE_CATEGORY ) return {...state, category: action.payload.newValue}
    throw new Error(`No action with type ${action.type} known!`)
}