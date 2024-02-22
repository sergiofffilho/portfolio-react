import { useState } from 'react';
import Banner from './components/Banner/Banner.js'
import Form from './components/Form';
import Category from './components/Category';

function App() {

  const categories = [
    {
      name: 'Games',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Desktop',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Web',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
  ]

  const [projects, setProjects] = useState([])

  const onSubmit = (project) => {
    setProjects([...projects, project])
  }

  return (
    <div>
      <Banner/>
      <Form 
        categories={categories.map(category => category.name)}
        onSubmit={project => onSubmit(project)} 
      />

      {categories.map(category => 
        <Category 
          key={category.name} 
          name={category.name} 
          primaryColor={category.primaryColor}
          secondColor={category.secondColor}
          projects={projects.filter(project => project.category === category.name)}
        />
      )}     
    
    </div>
  );
}

export default App;
