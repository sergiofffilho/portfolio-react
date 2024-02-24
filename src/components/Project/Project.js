import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from "react-icons/ai";
import './Project.css'

export const Project = ({project, backgroundColor, onDelete, onFavorite}) => {
    function favorite(){
        {onFavorite(project.id)}
    }

    const propsFavorite = {
        size: 25,
        color: "Red",
        onClick: favorite
    }

    return(
        <div className='project'>
            <AiFillCloseCircle 
                size={25} 
                className='delete'
                onClick={() => onDelete(project.id)}
            />
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={project.imageUrl} alt={project.name}/>
            </div>
            <div className='footer'>
                <h4>{project.name}</h4>
                <h5>{project.description} </h5>
                <div>
                    {project.favorite ?
                        <AiFillHeart {...propsFavorite} /> :
                        <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>            
        </div>
    )
}