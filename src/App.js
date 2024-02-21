import { useState } from 'react';
import Banner from './components/Banner/Banner.js'
import Form from './components/Form';

function App() {
  const [projects, setProjects] = useState([])

  const onSubmit = (project) => {
    console.log(project)
    setProjects([...projects, project])
  }

  return (
    <div>
      <Banner/>
      <Form 
        onSubmit={project => onSubmit(project)} 
      />
    </div>
  );
}

export default App;
