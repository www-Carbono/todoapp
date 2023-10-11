import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProviders ({ children }) {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = window.localStorage.getItem('theme')
    return theme ? JSON.parse(theme) : false
  })

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    window.localStorage.setItem('theme', JSON.stringify(darkTheme))
  }, [darkTheme])

  const theme = {
    darkTheme,
    setDarkTheme
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
