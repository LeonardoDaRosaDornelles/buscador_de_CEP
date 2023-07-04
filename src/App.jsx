import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

import './App.css'
import api from './services/api'


 function App() {

  const [input,setInput] = useState('')
  const [cep,setCep] = useState({})

  async function handleSearch(){
    const espaco = input.trim()

    if(espaco == ''){
      alert('Preencha com algum cep')
    }

    try{
      const response = await api.get(`${espaco}/json`)
      setCep(response.data)
      setInput('')
    }catch{
      alert('CEP inválido! ou algo deu errado')
      setInput('')
    }

  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP</h1>
      <div className="containerInput">
        
        <input type="text" placeholder='Digite seu CEP' value={input} 
        onChange={e => {setInput(e.target.value)}}/>

        <button className='buttonSearch' onClick={handleSearch}>
          <FaSearch size={25} color='#fff'/>
        </button>

      </div> 

      {Object.keys(cep).length > 0 &&
      <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        {cep.complemento  && <span>{cep.complemento}</span>}
        <span>{cep.bairro} </span>
        <span>{cep.localidade} - {cep.uf} </span>
      </main>
      }

    </div>
  )
}

export default App
