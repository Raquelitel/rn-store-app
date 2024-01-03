# [Aplicación en Construcción]

Pequeño proyecto donde se podrán observar 3 formas de gestionar el estado global de la aplicación a través del Context de React, Redux y Redux Toolkit (cada una estará en una rama separada)

## Dev

1. Clonar repositorio
2. npm install
3. npm run
4. Copiar el .env.template y renombrarlo a .env
5. Añadir variables de entorno
   - Firebase (www.firebase.com) Debe crear proyecto en firebase

## Branch "react-context"
Estado global de la app a través del Context de React

## Branch "redux"
Estado global de la app a través de Redux (deprecated) https://react-redux.js.org/
Requiere instalación de:
 - React-redux 
 - redux-thunk (para despachar funciones asíncronas)

## Branch "redux-toolkit"
Estado global de la app a través de Redux Toolkit (recomendada por el equipo de Redux) https://redux-toolkit.js.org/
 - Requiere la instalación de redux-toolkit 
 - (Redux-thunk ya no es necesario)