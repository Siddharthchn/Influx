import React from 'react'
import NavHero from './components/NavHero'
import Movies from './components/Movies'
import Questions from './components/Questions'

function App() {
  return (
    <div className='font-altivo'>
      <NavHero />
      <Movies/>
      <Questions />
    </div>
  )
}

export default App