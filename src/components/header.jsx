import { useContext } from 'react'
import darkModeImage from '../assets/images/icon-moon.svg'
import dayModeImage from '../assets/images/icon-sun.svg'

import { ThemeContext } from '../context/theme'
export const Header = ({ addTasks }) => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)

  const onEnterDown = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        addTasks({ tarea: e.target.value, terminada: false })
        e.target.value = ''
      }
    }
  }

  return (
    <header className={darkTheme ? 'flex flex-col bg-cover px-[5%] dark md:px-[20%] lg:px-[30%]' : 'flex flex-col bg-cover px-[5%] md:px-[20%] lg:px-[30%]'}>
      <div className='flex items-center justify-between mt-20 flex-rows'>
        <h1 className='text-4xl font-medium tracking-[0.5em]'>TODO</h1>
        <img src={darkTheme ? darkModeImage : dayModeImage} alt='moon icon' className='w-5 h-5' onClick={() => setDarkTheme(!darkTheme)} />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' id='inputText' className='mt-10 w-[100%] py-3 px-12' placeholder='Create New To Do...' onKeyDown={onEnterDown} />
      </form>
    </header>
  )
}
