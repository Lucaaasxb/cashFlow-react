import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Rodape from "../components/Rodape.jsx"
import Menu from '../components/Menu.jsx'
import Sidebar from '../components/Sidebar.jsx'
import './Layout.css'

function Layout() {
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(null) // null = checking, true/false = verified

  // Rotas que requerem autenticação
  const protectedRoutes = ['/dashboard', '/receitas-despesas', '/metas', '/assistente', '/personalizacao']

  // Verificar se a rota atual precisa de autenticação
  const needsAuth = protectedRoutes.some(prefix => pathname.startsWith(prefix))

  // Rotas que mostram a sidebar
  const showSidebar = protectedRoutes.some(prefix => pathname.startsWith(prefix))

  // Verificar autenticação apenas uma vez ao montar
  useEffect(() => {
    const token = localStorage.getItem('cashFlowToken')
    const user = localStorage.getItem('cashFlowUser')
    // Considerar autenticado se tiver token OU usuário cadastrado
    setIsAuthenticated(!!token || !!user)
  }, [])

  // Simular carregamento ao mudar de rota
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [pathname])

  // Mostrar loading enquanto verifica autenticação
  if (isAuthenticated === null) {
    return <div className="layout-loading">Carregando...</div>
  }

  // Redirecionar para login se a rota precisa de autenticação e não está autenticado
  // Temporariamente desabilitado para debug - descomente se necessário
  // if (needsAuth && !isAuthenticated) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <div className="layout-container">
      {showSidebar ? (
        <div className="layout-with-sidebar">
          <Sidebar />
          <div className="layout-main-wrapper">
            <main className={`main-with-sidebar ${isLoading ? 'loading' : ''}`}>
              <div className="main-content-wrapper">
                <Outlet />
              </div>
              <Rodape />
            </main>
          </div>
        </div>
      ) : (
        <div className={`layout-without-sidebar ${isLoading ? 'loading' : ''}`}>
          <Menu />
          <main className="main-without-sidebar">
            <div className="main-content-wrapper">
              <Outlet />
            </div>
            <Rodape />
          </main>
        </div>
      )}
    </div>
  )
}

export default Layout
