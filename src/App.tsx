import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState<string>('dark')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme} ${theme == 'dark' ? 'bg-[#161616]': 'bg-[#FAFAFE]'} min-h-[100vh] p-2`}>
      <Header/>
      <Home/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
