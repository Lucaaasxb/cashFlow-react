import { Outlet, useLocation } from 'react-router-dom'
import Rodape from "../components/Rodape.jsx"
import Menu from '../components/Menu.jsx'
import Sidebar from '../components/Sidebar.jsx'

function Layout() {
  const { pathname } = useLocation()
  const showSidebar = ['/dashboard','/receitas-despesas','/metas','/assistente','/personalizacao']
    .some(prefix => pathname.startsWith(prefix))
  return (
    <>
      {showSidebar ? (
        <div>
          <Sidebar />
          <main className="main-with-sidebar">
            <Outlet />
            <Rodape />
          </main>
        </div>
      ) : (
        <div className='container'>
          <Menu />
          <Outlet />
          <Rodape />
        </div>
      )}
    </>
  )
}

export default Layout
