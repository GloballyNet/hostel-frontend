import { Routes, Route } from "react-router-dom";
import { Login, Register, HomePage } from "../Pages";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </>
  )
}
