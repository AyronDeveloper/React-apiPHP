import { useEffect, useState } from "react";

const useFetch = (get=null) => {

    const api="http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/";
    const [comidas,setComidas]=useState({data:[]})

    if(get!=null){
      const getID= `?id=${get}`
      const getComidas=async()=>{
        const response =await fetch(api+getID)
        const dataComidas= await response.json()
        setComidas({data:dataComidas})
      }
      useEffect(()=>{
        getComidas()
      },[])

    }else{
      const getComidas=async()=>{
        const response =await fetch(api)
        const dataComidas= await response.json()
        setComidas({data:dataComidas})
      }
      useEffect(()=>{
        getComidas()
      },[])
    }

  return {
    data:comidas.data
  }
}

export default useFetch
