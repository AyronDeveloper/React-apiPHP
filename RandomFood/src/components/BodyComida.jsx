import React, { useEffect, useState } from 'react'
import "../styles/body.css"
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BodyComida = () => {
const api="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"
const {data}=useFetch()

const [comidaData, setComidaData]=useState([])

useEffect(()=>{
  setComidaData(data)
},[data])

const eliminar=async(idDelete)=>{
  let f = new FormData()
  f.append("METHOD","DELETE")
  await axios.post(api, f,{params:{id:idDelete}})
  setComidaData(comidaData.filter(comida => comida.id !== idDelete))
}

  return (
    <main>
        <div>
            <h3>¿Que puedo comer hoy?</h3>
        </div>
        <div className='contenedor-buscar-comida'>
            <button>Buscar Comida</button>
        </div>
        <div className='mega-caja-comidas'>
          {comidaData.map(comida=>(
            <div className='caja-comidas' key={comida.id}>
              <div className='caja-comida-img'>
                <img src={comida.imagen} alt="cualquier wewbada" loading='lazy'/>
              </div>
              <div className='caja-comida-info'>
                <p className='titulo'>{comida.nombre}</p>
              </div>
              <div>
                <Link to={`/edit/${comida.id}`}>Editar</Link>
              </div>
              <div>
                <button onClick={()=>eliminar(comida.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
    </main>
  )
}

export default BodyComida
