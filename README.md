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

### Windows
1. Instalar **Python** 2.7.x
2. Instalar **pip**
   - Para Python >= 2.7.9 ya esta incluido.
   - Para otras versiones descargar [get-pip.py] (https://bootstrap.pypa.io/get-pip.py) e instalar `> python get-pip.py`
3. Instalar **virtualenv** o **virtualwrapper** `> pip install virtualenv`
4. Crear el virtual environment: ubicarse en el directorio superior del proyecto Sharehits/ en la consola `> virtualenv sharehits`
5. Activar el enviroment: ubicarse en Sharehits/Scripts/ `> activate`
6. Instalar lo **requerimientos**: ubicarse en Sharehits/ `> pip install -r requirements.txt`
7. Correr la aplicacion: `> python manage.py runserver`
8. En el browser ingresar: [http://localhost:8000/login] (http://localhost:8000/login)

### Linux
1. Having installed python (Linux and MAC OSX is the default)

2. Install pip
	
		sudo apt-get install python-pip

3. Install virtualenv
	
		sudo pip install virtualwrapper


4. Create a virtual environment with virtualenv
	
		virtualwrapper: mkvirtualenv venv


5. Active your virtual environment
	
		virtualwrapper: workon venv


6. Install requirements with pip 
	
		pip install -r requirements.txt


7. Setup the Database

    	make all

    7.1 input the password for the admin


8. Run the server 
	
		python manage.py runserver


9. In your browser enter the address (localhost:8000/login)

Warning : En caso de estar en ubuntu 14.04 , asegurarse de tener instalado el paquete python-dev (sudo apt-get install python-dev).

## Documentacion de desarrollo
 https://docs.google.com/document/d/1KsqAoenvSD4GTlpsWedAQR4zLAWLv8_Ofa7Tj0GpxF0

 **by: @wil_jm** && friends.
