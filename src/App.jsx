import { useState } from 'react'
import './App.css'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import ProjectsSidebar from './components/ProjectsSidebar'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectState,setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })

  const handleStartAddProject=()=>{
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  const handleSelectProject=(id) =>{
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }

  const handleCancelAddProject = ()=>{
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }

  const handleAddProject = (projectData)=>{
    setProjectsState(prevState=>{
      const projectId = Math.random()
      const newProject={...projectData,id:projectId}
      return{ 
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
    }})
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(project=>project.id===projectState.selectedProjectId)
  console.log(selectedProject);
  let content = <SelectedProject project={selectedProject}></SelectedProject>;
  if (projectState.selectedProjectId===null){
    content =<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>

  } else if (projectState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectState.projects}></ProjectsSidebar>
      {content}

    </main>
  )
}

export default App
