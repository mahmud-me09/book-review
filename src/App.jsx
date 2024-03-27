import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='max-w-full mx-2 lg:mx-32'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
