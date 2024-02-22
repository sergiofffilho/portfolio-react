import Project from '../Project'
import './Category.css'

export const Category = (props) => {

    return (
        props.projects.length > 0 && <section 
            className='category' 
            style={{ backgroundColor: props.secondColor }}
        >
            <h3 style={{ borderColor: props.primaryColor }}>
                {props.name}
            </h3>

            <div className='projects'>
                {props.projects.map(project =>
                    <Project 
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        backgroundColor={props.primaryColor}
                    />)
                }
            </div>

        </section>
    )
}