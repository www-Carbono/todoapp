import { useState, useEffect } from 'react'

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const tasks = window.localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : []
  })
  const [filterTasks, setFilterTasks] = useState(() => {
    const tasks = window.localStorage.getItem('tasksFilter')
    return tasks ? JSON.parse(tasks) : []
  })

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    setTasks(tasks)
  }, [tasks])

  useEffect(() => {
    window.localStorage.setItem('tasksFilter', JSON.stringify(filterTasks))
    setFilterTasks(filterTasks)
  }, [filterTasks])

  function addTasks (task) {
    task.id = parseInt(tasks.length) + 1
    setTasks([...tasks, task])
    setFilterTasks([...tasks, task])
  }

  function editTask (task) {
    tasks.map((item) => {
      if (item.id === task.id) {
        item.terminada = !item.terminada
        setTasks([...tasks])
      }
      return item
    })
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
    window.localStorage.setItem('tasksFilter', JSON.stringify(tasks))
  }

  function removeTask (task) {
    const newTasks = tasks.filter(tarea => tarea.id !== task.id)
    setTasks(newTasks)
    setFilterTasks(newTasks)
  }

  function filterTasksFunction (task, mode) {
    const newTasks = mode === 'Completed' ? task.filter(tarea => tarea.terminada === true) : mode === 'All' ? task.filter(tarea => tarea.terminada === false) : tasks
    setFilterTasks(newTasks)
  }

  function removeAll () {
    setTasks([])
    setFilterTasks([])
  }

  return { tasks, addTasks, editTask, removeTask, filterTasksFunction, filterTasks, removeAll }
}
