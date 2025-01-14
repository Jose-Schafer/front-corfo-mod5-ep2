import Home from '@/views/home'
import MedicalTeam from '@/views/medical-team'
import Contact from '@/views/contact'
import Backoffice from '@/views/backoffice'

export const routes = [
  {
    "path": "/",
    "text": "Inicio",
    "component": <Home />
  },
  {
    "path": "/equipo-medico",
    "text": "Equipo Médico",
    "component": <MedicalTeam />
  },
  {
    "path": "/contacto",
    "text": "Contacto",
    "component": <Contact />
  },
  {
    "path": "/backoffice",
    "text": "Backoffice",
    "component": <Backoffice />
  }
]
