import { useState } from 'react';
import Banner from './components/Banner/Banner.js'
import Form from './components/Form';
import Category from './components/Category';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [categories, setCategories] = useState([
    {
      id: uuidv4(),
      name: 'Games',
      color: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Desktop',
      color: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Web',
      color: '#F0F8E2'
    },
  ])

  const [projects, setProjects] = useState([])

  const onSubmit = (project) => {
    project.id = uuidv4()
    setProjects([...projects, project])
  }

  function onDeleteProject(id){
    setProjects(projects.filter(project => project.id !== id))
  }

  function changeCategoryColor(color, id){
    setCategories(categories.map(category => {
      if(category.id === id){
        category.color = color;
      }
      return category
    }))
  }

  return (
    <div>
      <Banner/>
      <Form 
        categories={categories.map(category => category.name)}
        onSubmit={project => onSubmit(project)} 
      />

      <section className='categories'>
        <h1>My projects</h1>
        {categories.map(category => 
          <Category 
            key={category.id} 
            category={category}
            projects={projects.filter(project => project.category === category.name)}
            onDelete={onDeleteProject}
            onChangeColor={changeCategoryColor}
          />
        )}     
      </section>
      <Footer/>
    </div>
  );
}

export default App;
