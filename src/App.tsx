
import './App.css'
import { Notes } from './Notes'

function App() {

  return (
    <div className='container flex justify-center'>
      <div className='w-9/12 bg-lime-100 p-16 rounded-xl'>
        <h1 className='text-4xl mb-10'>Note Manager</h1>
        <Notes/>
      </div>
    </div>
  )
}

export default App
