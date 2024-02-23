import './TextField.css'

export const TextField = (props) => {
    const placeholder = `Insert your ${props.label}`

    const onChange = (event) => {
        props.isChanged(event.target.value)
    }
    
    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onChange} required={props.required} placeholder={placeholder}/>
        </div>
    )
}