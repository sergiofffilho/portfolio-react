import './Field.css'

export const Field = ({type='text', label, value, isChanged, required}) => {
    const placeholder = `Insert your ${label}`

    const onChange = (event) => {
        isChanged(event.target.value)
    }
    
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}