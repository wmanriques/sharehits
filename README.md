#Arquitectura de software 2015-1

## ShareHits

Repositorio de la plataforma colaborativa "Sharehits"

## Funcionalidades

- Authenticacion con facebook
- Creacion de salas
- Chat por sala
- Busqueda de musica de diferentes sources(soundcloud , spotify ,etc)
- Playlist colaborativas e interactivas

## Pasos para instalar librerias del frontend
1. Tener instalado Nodejs,npm,gulp y bower
2. Ubicarse en la carpeta raiz del proyecto y ejecutar cada comando desde la terminal.
3. Instalar librerias frontend : bower install
4. Instalar librerias de node : npm install
5. Ejecutar tareas de gulp : gulp

## Pasos para correr en backend

1. Having installed python (Linux and MAC OSX is the default)
2. Install pip (command: sudo apt-get install python-pip)
3. Install virtualenv (command: sudo pip install virtualenv or virtualwrapper(recommended))
4. Create a virtual environment with virtualenv (command: virtualenv venv or with virtualwrapper: mkvirtualenv venv(recommended))
5. Active your virtual environment (command: source venv/bin/activate or with virtualwrapper: workon venv)
6. Install requirements with pip (command: pip install -r requirements.txt)
7. Create the DB: python manage.py migrate
8. Run the application python manage.py runserver
9. In your browser enter the address (localhost:8000/perfil)

Warning : En caso de estar en ubuntu 14.04 , asegurarse de tener instalado el paquete python-dev (sudo apt-get install python-dev).

## Documentacion de desarrollo
 https://docs.google.com/document/d/1KsqAoenvSD4GTlpsWedAQR4zLAWLv8_Ofa7Tj0GpxF0

 **by: @wil_jm** && friends.
