import './task.css'
import deleteTask from '../assets/images/icon-cross.svg'
import circleIcon from '../assets/images/icon-circle.svg'
import circleIconCompleted from '../assets/images/icon-check-circle.svg'
import { useState } from 'react'

import { Filters } from './filters'
export const Tasks = ({ tasks, editTask, removeTask, filterTasksFunction, filterTasks, removeAll }) => {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null)
  const [cambiarImagen, setCambiarImagen] = useState(null)

  const completedTask = (task) => {
    editTask(task)
    setCambiarImagen(task.id)
  }

  return (
    <ul className='rounded-lg color'>
      {
      filterTasks.length === 0
        ? <p className='my-5 text-center'>No Hay Ninguna Tarea en Esta Categoria</p>
        : filterTasks.map((task) => {
          return (
            <li
              key={task.id}
              className='flex items-center justify-between px-3 py-3 border-b'
              onMouseOver={() => setElementoSeleccionado(task.id)}
              onMouseOut={() => setElementoSeleccionado(null)}
              style={task.terminada ? { textDecoration: 'line-through' } : null}
            >
              <div className='flex items-center gap-3'>

                <img src={cambiarImagen === task.id && task.terminada === true ? circleIconCompleted : circleIcon} className='self-center w-7 h-7' onClick={() => completedTask(task)} />
                {task.tarea}

              </div>
              {elementoSeleccionado === task.id && <img src={deleteTask} alt='delete task icon' className='deleteTask' onClick={() => removeTask(task)} />}

            </li>
          )
        })
    }
      <div className='flex justify-between px-5 m-3'>
        <p>{filterTasks.length} Items Left</p>
        <div className='flex gap-2'>
          <Filters filterTasksFunction={filterTasksFunction} tasks={tasks} removeAll={removeAll} />

        </div>
      </div>
    </ul>
  )
}
