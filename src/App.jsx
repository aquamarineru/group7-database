import { useState } from 'react'
import './App.css'
import data from "./data/data.json"

let sample_data = data.slice(0,10);
console.log(sample_data);

function App() {
  const [dataBase, setDataBase] = useState()
  const [page, setPage] = useState(0)
  const [hitPerPage, setHitPerPage] = useState(10)
  const [query, setQuery] = useState('')
  console.log(data)
  
  return (
    <div className="App">
      
    </div>
  )
}

export default App
