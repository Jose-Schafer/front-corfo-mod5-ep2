# How to start
Install packages
```sh
nvm use 23
npm install
```

Start dev server
```sh
npm run dev
```

open `http://localhost:5173`

# Preguntas


## 1. Protección de Rutas con React Router Dom
Ver implementación en `src/config/protected-route.tsx`, `src/config/routes.tsx`, `src/config/auth-validators.js`

## 2. Implementación de Autenticación de Usuarios y Roles
La ruta de `Contacto` solo puede ser acceder con rol de usuario. La ruta de `Backoffice` solo se puede acceder con role de admin

Credenciales:
```
# Admin
user: admin
password: admin

# User
user: user
password: user
```

## 3. Consumo de APIs Protegido con API Key y JWT 
Ver api protegida en `src/api/requests.js`:


## 4. Prevención de vulnerabilidades comunes
### Clickjacking
Ver `vite.config.ts`

### XSS

### SQL Injection

### Ataque DoS

## 5. Encriptación de Datos en el Front End
Ver datos encriptados en `src/api/request.js` y su uso en `src/providers/Context.jsx` al pasar un body. Se puede ver en el debugger el payload de la request.
