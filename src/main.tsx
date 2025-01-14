import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { routes } from '@/config/routes'
import Layout from './layout.tsx'
import { DoctorsProvider } from '@/providers/DoctorsContext'
import ProtectedRoute from '@/api/auth-request'
import Login from '@/views/login'
import { isAdmin } from '@/api/auth-validators'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DoctorsProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={
              <ProtectedRoute isAllowed={isAdmin()} redirectPath="/login">
                <Layout>
                  {route.component}
                </Layout>
              </ProtectedRoute>
            } key={index} />
          ))}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </DoctorsProvider>
  </StrictMode >
)
