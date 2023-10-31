import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const BodyEdit = () => {
  const api="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"
  const {id}=useParams()
  const {data}=useFetch(`${id}`)
  const navigate=useNavigate()
  const [dataUpdate, setDataUpdate]=useState([]);
  
  const idData=data.id
  const nombreData=data.nombre
  const imagenData=data.imagen

  const [comidaData, setComidaData]=useState({idPut:"",nombre:"", imagen:""})

  useEffect(() => {
    setComidaData({idPut:idData, nombre:nombreData, imagen:imagenData });
  }, [idData,nombreData, imagenData]);

  const {idPut,nombre, imagen}=comidaData
  
  const handleChange=({target})=>{
    const {name, value}=target
    setComidaData({...comidaData,[name]:value})
  }

  const actualizar=async(e)=>{
    e.preventDefault()
    var f = new FormData()
    f.append("nombre",comidaData.nombre)
    f.append("imagen",comidaData.imagen)
    f.append("METHOD","PUT")
    await axios.post(api, f, {params:{id: comidaData.idPut}})
    .then(response=>{
      var dataNueva=dataUpdate
      dataNueva.map(apiUpdate=>{
        if(apiUpdate.id===comidaData.idPut){
          apiUpdate.nombre=comidaData.nombre
          apiUpdate.imagen=comidaData.imagen
        }
      })
      setDataUpdate(dataNueva)
      navigate("/")
    }).catch(error=>{
      console.error(error);
    })
  }


  return (
    <>
    <form onSubmit={actualizar}>
      <input type="text" name='nombre' onChange={handleChange} value={nombre}/><br />
      <input type="text" name='imagen' onChange={handleChange} value={imagen}/><br />
      <img src={imagen} alt="" /><br />
      <button>Actualizar</button>
    </form>
    </>
  )
}

export default BodyEdit
