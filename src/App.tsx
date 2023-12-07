import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css"
import { Header } from './Components/Header/Header';
import { Home } from './View/Home/Home';
import { Crud } from "./View/CRUD/Crud";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Home" Component={Home}/>
        <Route path="/Crud" Component={Crud}/>
        <Route path="*" element={<Navigate to='/Home' />}/>
      </Routes>
    </>
  )
}

export default App
