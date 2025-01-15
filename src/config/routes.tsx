import Home from '@/views/home'
import MedicalTeam from '@/views/medical-team'
import Contact from '@/views/contact'
import Backoffice from '@/views/backoffice'
import ProtectedRoute from '@/config/protected-route'

export const routes = [
  {
    "path": "/",
    "text": "Inicio",
    "component": (
      <Home />
    )
  },
  {
    "path": "/equipo-medico",
    "text": "Equipo Médico",
    "component": (
      <MedicalTeam />
    )
  },
  {
    "path": "/contacto",
    "text": "Contacto",
    "component": (
      <ProtectedRoute allowedRoles={["user"]} redirectPath="/login">
        <Contact />
      </ProtectedRoute>
    )
  },
  {
    "path": "/backoffice",
    "text": "Backoffice",
    "component": (
      <ProtectedRoute allowedRoles={["admin"]} redirectPath="/login">
        <Backoffice />
      </ProtectedRoute>
    )
  }
]
