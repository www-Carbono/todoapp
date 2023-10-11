import { useState } from 'react'

export const Filters = ({ filterTasksFunction, tasks, removeAll }) => {
  const [buttonStyle, setButtonStyle] = useState('All')

  const filterStyle = (style) => {
    return (
      buttonStyle === style
        ? { color: '#3a7bfd', fontWeight: 'bold', border: '2px solid black', borderRadius: '10px', padding: '0px 10px', borderStyle: 'dashed' }
        : null
    )
  }

  return (
    <>

      <div className='flex gap-2'>
        <p onClick={() => { filterTasksFunction(tasks); setButtonStyle('All') }} style={filterStyle('All')}>All</p>
        <p onClick={() => { filterTasksFunction(tasks, 'All'); setButtonStyle('Active') }} style={filterStyle('Active')}>Active</p>
        <p onClick={() => { filterTasksFunction(tasks, 'Completed'); setButtonStyle('Completed') }} style={filterStyle('Completed')}>Completed</p>

      </div>
      <p onClick={() => { removeAll(); setButtonStyle('All') }}>Delete All</p>
    </>
  )
}
