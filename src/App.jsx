import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card'
//import data from './data.json'

/* let sample_data = data.slice(0,10);
console.log(sample_data); */

function App() {
  const [dataBase, setDataBase] = useState([])
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')
  console.log(dataBase)

  useEffect(() => {
    fetch(`https://634401cd2dadea1175b280ef.mockapi.io/Users`).then((response) => response.json()).then((output)=> setDataBase(output)).catch(() => {
      setError("Error: Fetching Failed");
    })
  }, [])
  console.log(dataBase)
  return (
    <div className="App">
    {dataBase.length
      ? dataBase.map((person) => {
          return (
            <Card
              {...person}
              key={person.id}
            />
          );
        })
      : 'no users yet'}
    
    </div>
  )
}

export default App
