import './App.css'
import Mensaje from './Mensaje'

const Descripcion = () => {
  return (
    <p>Esta es la app del curso fullstack de Midu</p>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje color='green' message='Estamos trabajando' />
      <Mensaje color='red' message='En un curso' />
      <Mensaje color='blue' message='De React' />
      <Descripcion />
    </div>
  )
}

export default App
