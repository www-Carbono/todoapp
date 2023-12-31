import './App.css'
import { Header } from './components/header'
import { Tasks } from './components/task'

import { useTasks } from './hooks/useTask'

import { ThemeContext } from './context/theme'
import { useContext } from 'react'

function App () {
  const { darkTheme } = useContext(ThemeContext)
  const { tasks, addTasks, editTask, removeTask, filterTasksFunction, filterTasks, removeAll } = useTasks()

  return (
    <>
      <Header addTasks={addTasks} />
      <div className={darkTheme ? 'flex flex-col justify-center mx-[5%] -mt-28 dark md:mx-[20%] lg:mx-[30%]' : 'flex flex-col justify-center mx-[5%] -mt-28 md:mx-[20%] lg:mx-[30%]'}>
        <Tasks
          tasks={tasks}
          editTask={editTask}
          removeTask={removeTask}
          filterTasksFunction={filterTasksFunction}
          filterTasks={filterTasks}
          removeAll={removeAll}
          className={darkTheme ? 'dark' : ''}
        />

      </div>
    </>
  )
}

export default App
