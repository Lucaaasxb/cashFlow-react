import { Outlet, Link } from 'react-router-dom'
import Titulo from '../components/Titulo.jsx'
import Rodape from "../components/Rodape.jsx"
import Menu from '../components/Menu.jsx'






function Layout() {


  return (
    <>
     <div className='container'>
        <Menu />
        <Outlet />
      </div>
      <Rodape />
    </>
  )
}

export default Layout
