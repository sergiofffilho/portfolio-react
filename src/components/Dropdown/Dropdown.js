import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => { 
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}