import { CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_IMAGE, CHANGE_PRICE, CHANGE_TITLE } from "./actions"

export const createCommand = {
    title: '',
    price: 0,
    category: '',
    description: '',
    image: ''
}

export const createReducer = (state, action) => {
    if ( action.type === CHANGE_TITLE ) return {...state, title: action.payload.newValue}
    else if ( action.type === CHANGE_PRICE ) return {...state, price: action.payload.newValue}
    else if ( action.type === CHANGE_CATEGORY ) return {...state, category: action.payload.newValue}
    else if ( action.type === CHANGE_DESCRIPTION ) return {...state, description: action.payload.newValue}
    else if ( action.type === CHANGE_IMAGE ) return {...state, image: action.payload.newValue}
    throw new Error(`No action with type ${action.type} known!`)
}