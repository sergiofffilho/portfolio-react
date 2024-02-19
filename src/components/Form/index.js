import TextField from '../TextField'
import Dropdown from '../Dropdown'
import './Form.css'
import Button from '../Button'

const Form = () => {

    const categories = ['Games', 'Desktop', 'Web']

    const save = (event) => {
        event.preventDefault()
        alert('OK submitted')
    }

    return(
        <section className='form'>
            <form onSubmit={save}>
                <h2>Add project</h2>
                <TextField required={true} label="title"/>
                <TextField label="description"/>
                <TextField label="image url"/>
                <Dropdown label="category" itens={categories} />
                <Button>
                    Create project
                </Button>
            </form>           
        </section>
    )
}

export default Form