# Aplicación Flask y React

## Configuración inicial del proyecto

1. Estructura de carpetas:
https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o

    flask-react-app
    -  env
    -  frontend
    -  backend
    - wsgi.py

2. instalación de paquetes
https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9

    (El CORS no es necesario cuando se sigue el paso siguiente y las llamadas a la api no necesitan la ruta completa)

3. Configuración de proxi para el servidor de desarrollo
https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
## Añadir soporte MULTILENGUAJE

Esta es la documentación oficial: https://react.i18next.com

Seguir estas instrucciones:
https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/

**IMPORTANTE:** En el archivo i18n.js falta la siguiente linea al final
```export default i18n;```