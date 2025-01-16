import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { routes } from '@/config/routes'
import Layout from './layout.tsx'
import { DoctorsProvider } from '@/providers/DoctorsContext'
import { AuthProvider } from '@/providers/AuthContext'
import Login from '@/views/login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <DoctorsProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route path={route.path} element={
                <Layout>
                  {route.component}
                </Layout>
              } key={index} />
            ))}
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </DoctorsProvider>
    </AuthProvider>
  </StrictMode >
)
