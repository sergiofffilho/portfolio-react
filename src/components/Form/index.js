import Field from '../Field'
import Dropdown from '../Dropdown'
import './Form.css'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('Games')

    const [categoryName, setcategoryName] = useState('')
    const [categoryColor, setcategoryColor] = useState('')

    const save = (event) => {
        event.preventDefault()
        props.onSubmit({
            name,
            description,
            imageUrl,
            category,
        })
        setName('')
        setDescription('')
        setImageUrl('')
        setCategory('Games')
    }

    if(props.isShowForm){
        return(
            <section className='form-container'>
                <form className='form' onSubmit={save} >
                    <h2>Add project</h2>
                    <Field
                        required={true}
                        label="title"
                        value={name}
                        isChanged={value => setName(value)}
                    />
                    <Field
                        label="description"
                        value={description}
                        isChanged={value => setDescription(value)}
                    />
                    <Field
                        label="image url"
                        value={imageUrl}
                        isChanged={value => setImageUrl(value)}
                    />
                    <Dropdown
                        label="category"
                        itens={props.categories}
                        value={category}
                        isChanged={value => setCategory(value)}
                    />
                    <Button>
                        Create project
                    </Button>
                </form>

                <form className='form' onSubmit={(event => {
                    event.preventDefault()
                    props.registerCategory({name: categoryName, color: categoryColor})
                })}>
                    <h2>Add category</h2>
                    <Field
                        required
                        label="category name"
                        value={categoryName}
                        isChanged={value => setcategoryName(value)}
                    />
                    <Field
                        required
                        label="color"
                        value={categoryColor}
                        isChanged={value => setcategoryColor(value)}
                        type='color'
                    />
                    <Button>
                        Create category
                    </Button>
                </form>
            </section>
        )
    }
}

export default Form