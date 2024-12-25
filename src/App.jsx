
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './routes/navigation/navigation.component'
import Home from './pages/home/home.page'
import Diets from './pages/diets/diets.page'
import Menu from './pages/menu/menu.page'
import Calculator from './pages/calculator/calculator.page'
import Delivery from './pages/delivery/delivery.page'

const App = () =>{
  return (
    <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='/diets' element={<Diets/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/delivery' element={<Delivery/>}/>
        </Route>
    </Routes>
  )
}

export default App
