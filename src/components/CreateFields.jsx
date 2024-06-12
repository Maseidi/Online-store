import React, { useContext, useReducer } from 'react'
import '../style/product-creation.css'
import TextField from './TextField'
import { createCommand, createReducer } from '../store/create'
import { CHANGE_CATEGORY, CHANGE_DESCRIPTION, CHANGE_IMAGE, CHANGE_PRICE, CHANGE_TITLE } from '../store/actions'
import NumberField from './NumberField'
import Combo from './Combo'
import { AppContext } from '../App'
import FileField from './FileField'

const valueMap = [
    {value: '', option: 'none'},
    {value: "men's clothing", option: "men's clothing"},
    {value: "women's clothing", option: "women's clothing"},
    {value: "electronics", option: "electronics"},
    {value: "jewelery", option: "jewelery"},
]

const CreateFields = () => {

    const {created, setCreated} = useContext(AppContext)
    const [createState, createDispatch] = useReducer(createReducer, createCommand)

    const createProduct = () => {
        const {title, description, image, price, category} = createState
        const id = created.length + 21
        setCreated([...created, {id, title, description, image, price, category}])
    }

  return (
    <div className='product-creation-fields'>
        <h1>create product</h1>
        <TextField id={'title'} label={'title'} type={CHANGE_TITLE} dispatch={createDispatch}/>
        <TextField id={'description'} label={'description'} type={CHANGE_DESCRIPTION} dispatch={createDispatch} rows={10}/>
        <NumberField id={'price'} label={'price'} type={CHANGE_PRICE} dispatch={createDispatch}/>
        <Combo id={'category'} label={'category'} valueMap={valueMap} type={CHANGE_CATEGORY} dispatch={createDispatch}/>
        <FileField id={'image'} label={'image'} type={CHANGE_IMAGE} dispatch={createDispatch}/>
        <div><button onClick={createProduct}>Create</button></div>
    </div>
  )
}

export default CreateFields