import { CHANGE_CART_AMOUNT } from "./actions"

export const cart = []

export const cartReducer = (state, action) => {
    if ( action.type === CHANGE_CART_AMOUNT ) {
        const {id, title, description, price, category, img, amount} = action.payload
        const product = state.find(x => x.id === id)
        if ( product ) {
          return state
            .filter(elem => elem.id !== id || (elem.id === id && elem.amount + amount > 0))
            .map(elem => elem.id === id ? { id, title, description, price, category, img, amount: elem.amount + amount} : elem)
        }
        return [...state, { id, title, description, price, category, img, amount}]
    }
    throw new Error(`No action with type ${action.type} known!`)
}