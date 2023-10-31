import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComida from './components/HeaderComida'
import BodyComida from './components/BodyComida'
import BodyAdd from "./components/BodyAdd"
import BodyEdit from "./components/BodyEdit"

const MostrarComida = () => {

  return (
    <>
        <HeaderComida></HeaderComida>
        <hr />
        <Routes>
          <Route path="/*" element={<BodyComida/>}></Route>
          <Route path="/add" element={<BodyAdd/>}></Route>
          <Route path="/edit/:id" element={<BodyEdit/>}></Route>
        </Routes>
    </>
  )
}

export default MostrarComida
