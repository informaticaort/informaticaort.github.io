# Informática ORT - Instructivo del repositorio
La idea de este team de github es poder guardar y visualizar los proyectos y materias de la orientación.
Para ello se creará un repositorio por cada materia y alli dentro estarán los contenidos de las mismas.

### Como descargar los archivos de un repositorio:

1. Ingresar a https://github.com/informaticaort
2. Seleccionar el repositorio que se desea descargar
(Por ejemplo, 3ro - Taller de programación)
![2do paso](https://i.ibb.co/RCnvPdX/1.png)
3. Hacer clic en el botón verde "Clone or download" y luego copiar el link que aparece
![3er paso](https://i.ibb.co/9yMGSVW/1.png)
4. Abrir la aplicación "Git bash", buscando "bash" en el menú inicio de Windows
5. Utilizar el comando cd para elegir el directorio donde se quiere guardar los archivos descargados<br/>
(Por ejemplo, el escritorio)<br/>
![5to paso](https://i.ibb.co/8cm4m1h/1.png)
6. Una vez elegida la ubicación, utilizar el comando "Git clone" seguido de la URL copiada en el paso 3
```
git clone https://github.com/informaticaort/3ro-taller-de-programacion.git
```
7. Listo! Ya deberías encontrar una carpeta con el repositorio que elegiste en la ubicación seleccionada en el paso 5.

A partir de ahora podés navegar libremente por la carpeta y visualizar y editar los archivos descargados.

### Como subir archivos a un repositorio (Solo para profes):
1. Clonar el repositorio al que se quiere agregar archivos, utilizando los pasos descritos arriba
2. Realizar las modificaciones deseadas (tales como agregar o modificar archivos). Ver referencia de notaciones
3. Hacer clic derecho dentro del directorio del repositorio descargado y luego seleccionar la opción "Git bash here"
![3er paso](https://i.ibb.co/8rh0RLR/1.png)
4. Utilizar el comando 'Git add' de la siguiente manera:
```
git add .
```
5. Utilizar el comando 'git commit', escribiendo un mensaje que quedará asignado a los cambios realizados (es una referencia para poder saber que se agregó o modificó)
```
git commit -m "Agrego ejemplo repetitivas exactas"
```
6. Por último, para efectuar los cambios utilizar el comando 'git push'
```
git push
```
7. Verificar en el link del repositorio que los cambios se hayan subido correctamente.
Esto se puede hacer mirando el nombre del útimo commit que aparece justo arriba de los archivos del repositorio.
