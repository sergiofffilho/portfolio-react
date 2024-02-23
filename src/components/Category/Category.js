import Project from '../Project'
import './Category.css'
import hexToRgba from 'hex-to-rgba';

export const Category = (props) => {

    return (
        props.projects.length > 0 && <section 
            className='category' 
            style={{ 
                backgroundImage: 'url(/images/background.png)',
                backgroundColor: hexToRgba(props.category.color, '0.6')
            }}
        >
            <input 
                onChange={event => props.onChangeColor(event.target.value, props.category.id)}
                value={props.category.color}
                type='color' 
                className='input-color' 
            />

            <h3 style={{ borderColor: props.category.color }}>
                {props.category.name}
            </h3>

            <div className='projects'>
                {props.projects.map(project => {                    
                    return <Project 
                        key={project.id}
                        project={project}
                        backgroundColor={props.category.color}
                        onDelete={props.onDelete}
                    />
                })}
            </div>
        </section>
    )
}