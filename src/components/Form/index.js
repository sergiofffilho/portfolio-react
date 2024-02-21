import TextField from '../TextField'
import Dropdown from '../Dropdown'
import './Form.css'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const categories = ['Games', 'Desktop', 'Web']

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('Games')

    const save = (event) => {
        event.preventDefault()
        props.onSubmit({
            name,
            description,
            imageUrl,
            category
        });
    }

    return(
        <section className='form'>
            <form onSubmit={save} >
                <h2>Add project</h2>
                <TextField 
                    required={true} 
                    label="title"
                    value={name}
                    isChanged={value => setName(value)}
                />
                <TextField 
                    label="description"
                    value={description}
                    isChanged={value => setDescription(value)}
                />
                <TextField
                    label="image url"
                    value={imageUrl}
                    isChanged={value => setImageUrl(value)}
                />
                <Dropdown 
                    label="category" 
                    itens={categories} 
                    value={category}
                    isChanged={value => setCategory(value)}
                />
                <Button>
                    Create project
                </Button>
            </form>           
        </section>
    )
}

export default Form