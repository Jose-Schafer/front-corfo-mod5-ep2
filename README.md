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
## 1. Preguntas Teóricas sobre TypeScript (2 puntos)
### ¿Qué es TypeScript y para qué se utiliza?
TypeScript es un lenguaje de programación desarrollado por Microsoft que extiende JavaScript añadiendo un sistema de tipos estáticos. Se utiliza principalmente para desarrollar aplicaciones a gran escala, ya que ayuda a detectar errores en tiempo de desarrollo, mejorar la mantenibilidad del código y facilitar el trabajo en equipo.

### ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?
a) TypeScript es un superconjunto de JavaScript, lo que significa que todo código JavaScript es válido en TypeScript, pero no al revés.
b) TypeScript introduce tipos estáticos, mientras que JavaScript es dinámico.
c) TypeScript requiere compilación a JavaScript para ejecutarse.
d) TypeScript ofrece características adicionales como interfaces, genéricos y decoradores, entre otras.

### ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?
Porque permite tipar las props, el estado y las funciones, lo que facilita detectar errores antes de ejecutar el código. Esto asegura una integración más robusta con herramientas de autocompletado y refactorización en el editor, mejorando la productividad y la calidad del código.

### ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en tiempo de desarrollo?
El sistema de tipos en TypeScript asigna un tipo específico a las variables, funciones y objetos. Esto previene errores comunes como pasar un argumento del tipo incorrecto a una función o acceder a propiedades inexistentes en un objeto. Al detectar estos problemas durante el desarrollo, se ahorra tiempo en depuración.

## 2. Ejercicio Práctico: Definiendo Tipos e Inferencia (1 punto)
Ver `src/components/doctor-card/index.tsx` para la implementación.

## 3. Definición de Interfaces y Clases en TypeScript (1 punto)
Ver `src/components/doctor-card/index.tsx` para la implementación. Ver en la implementación como se actualiza el nombre de especialidad "Cirugía" a "Médico cirujano"

## 4. TypeScript y ReactJS: Implementación Básica en un Componente (1.5 puntos)
Ver `src/components/doctor-card/index.tsx` para la implementación.

## 5. Ventajas de TypeScript en el Desarrollo con ReactJS (1 punto)
TypeScript ofrece varias ventajas en proyectos ReactJS:
- Detección temprana de errores: Al tipar props, estados y funciones, TypeScript puede detectar errores antes de ejecutar el código, evitando errores comunes.
Ejemplo: Si una prop esperada como string se pasa como number, TypeScript lanza un error en tiempo de desarrollo.
- Autocompletado mejorado: Los editores como VSCode ofrecen autocompletado basado en tipos definidos, agilizando el desarrollo.
Ejemplo: Al escribir doctor.name, el editor sugiere automáticamente las propiedades disponibles.
- Mayor productividad: Al contar con tipos explícitos, la refactorización es más segura y sencilla, lo que mejora la mantenibilidad del código.
Ejemplo: Cambiar el nombre de una propiedad en un type o interface actualiza automáticamente todas las referencias.
- Mantenimiento del código: Los tipos actúan como documentación viva del código, facilitando su comprensión por nuevos desarrolladores.
Ejemplo: Una interfaz Doctor deja claro qué propiedades tiene y su propósito.
Comparado con JavaScript puro, TypeScript ofrece mayor confianza en el código y permite construir aplicaciones ReactJS más escalables y libres de errores.


