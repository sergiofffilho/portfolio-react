import './TextField.css'

export const TextField = (props) => {
    const placeholder = `Insert your ${props.label}`
    
    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input required={props.required} placeholder={placeholder}/>
        </div>
    )
}