import { useState } from "react"
import axios from "axios"

const api="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/"

const BodyAdd = () => {

  const [agregar,setAgregar]=useState({nombre:"",imagen:""})
  const [data, setData]=useState([]);
  const {nombre, imagen}=agregar

  const handleInputChange=({target})=>{
    const {name,value}=target
    setAgregar({...agregar,[name]:value})
  }

 

  const insertar=async(e)=>{
    e.preventDefault()
    var f = new FormData();
    f.append("nombre",agregar.nombre)
    f.append("imagen",agregar.imagen)
    f.append("METHOD","POST")
    await axios.post(api,f).then(response=>{setData(data.concat(response.data))})
    setAgregar({nombre:"",imagen:""})
  }

  return (
    <form onSubmit={insertar}>
      <label htmlFor="">Nombre del Plato</label><br />
      <input type="text" name="nombre" placeholder="Escriba el nombre de su plato" onChange={handleInputChange} value={nombre}/><br />
      <label htmlFor="">Imagen del Plato</label><br />
      <input type="text" name="imagen" placeholder="Ingrese una imagen de referencia" onChange={handleInputChange} value={imagen}/><br />
      <button type="submit">Insertar</button>
    </form>
  )
}

export default BodyAdd
