import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select 
                onChange={event => props.isChanged(event.target.value)} 
                value={props.value}>
                {props.itens.map(item => { 
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}