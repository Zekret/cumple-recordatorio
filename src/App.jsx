import { useState } from 'react'
import './App.css'
import data from '../src/json/data'
import { List } from './components/List'

function App() {
  
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Cumpleaños hoy</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Limpiar todo</button>
      </section>
    </main>
  )
}

export default App
