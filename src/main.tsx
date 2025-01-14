import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { routes } from '@/config/routes'
import Layout from './layout.tsx'
import { DoctorsProvider } from '@/providers/DoctorsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DoctorsProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={<Layout>{route.component}</Layout>} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
    </DoctorsProvider>
  </StrictMode >
)
