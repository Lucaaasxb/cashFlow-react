import { Outlet, Link } from 'react-router-dom'
import Rodape from "../components/Rodape.jsx"
import Menu from '../components/Menu.jsx'

function Layout() {

  return (
    <>
      <div className='container'>
        <Menu />
        <Outlet />
        <Rodape />
      </div>
    </>
  )
}

export default Layout
