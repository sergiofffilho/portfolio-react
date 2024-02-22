import './Project.css'

export const Project = ({name, description, imageUrl, backgroundColor}) => {
    
    return(
        <div className='project'>
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{description}</h5>
            </div>            
        </div>
    )
}