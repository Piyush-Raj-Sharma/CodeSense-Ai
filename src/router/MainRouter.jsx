import { Route, Routes } from "react-router-dom"
import Home from './../pages/Home';
import CodeSense from './../pages/CodeSense';
import About from './../pages/About';


const MainRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path = '/codesense-ai' element={<CodeSense/>}/>
    <Route path = '/about' element = {<About/>} />
   </Routes>
  )
}

export default MainRouter