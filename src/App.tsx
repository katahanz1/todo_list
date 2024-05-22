import './styles/App.css'
import Form from './components/form'
import Task from './components/task'


function App() {

  return (
    <>
      <header >
        <h1>Todo List</h1>
      </header>
      <main className='todo-list-container'>
        <Form />
        <Task />
      </main>
    </>
    
  )
}

export default App
