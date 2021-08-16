# Pull Request

El pull request es la funcionalidad que facilita la colaboración entre los desarrolladores.

#### 1. Realizar fork del repositorio
Realiza un fork del repositorio. Esto creará una instancia del repositorio completo en tu cuenta.
![img fork](../../static/img/git/fork.png "Img Fork")
#### 2. Clonar el repositorio
Una vez que el repositorio se encuentre en su cuenta, clonar el proyecto.

`git clone "https://github.com/rokket-labs/URLPROYECTO"`
#### 3. Crear una rama
Como buena práctica crear una nueva rama, ya sea que se trate de un proyecto pequeño o estés contribuyendo en un equipo de trabajo.

`git checkout -b [Nombre de la Rama]`
#### 4. Realiza cambios y confírmalos
Realiza cambios esenciales al proyecto y guárdarlos luego ejecutar `git status` para ver los cambios no commiteados.

Agregar los cambios con el comando `git add "NOMBRE DEL ARCHIVO"`

Realizar el commit con el comando `git commit -m "Cambios realizados"`, puede revisar la documentación de [El Buen Commit](good-commit)
#### 5. Envía los cambios a GitHub
Para enviar los cambios al repositorio, se debe identificar el nombre del repositorio remoto `git remote`, en el caso de este tutorial, el nombre del repositorio es "origin".

Luego de identificar el nombre enviar los cambios al repositorio `git push origin [Nombre de la rama]`
#### 6. Crea un pull request
Dirigirse a la web del repositorio, debes hacer click en el botón "Pull request", luego provee todos los detalles necesarios de lo que has hecho y envía el pull request. puede revisar la documentación de [El Buen Pull Request](good-pullrequest)
#### 7. Sincroniza la rama maestra con la del repositorio original
Antes de enviar cualquier pull request al repositorio original debes sincronizar tu repositorio con aquel. Incluso si no vas a enviar un pull request al repositorio original, es mejor efectuar la sincronización, ya que pueden haberse agregado algunas prestaciones o funciones adicionales.

- Revisa en que rama estás ubicado `git branch`
- Cambia a la rama master `git checkout master`
- Agrega el repositorio original como un repositorio upstream para poder extraer los cambios desde el repositorio original a tu versión local `git remote add upstream [Url del repositorio del propietario]`
- Busca todos los cambios del repositorio original `git fetch upstream`
- Fusiona lso cambios de la rama master a la rama local `git merge upstream/master`
- Enviar los cambios a GitHub, en este punto tu rama local está sincronizada con la rama maestra del repositorio original. Si deseas actualizar el repositorio de GitHub, necesitas enviar tus cambios `git push origin master`

**NOTA:** Luego de sincronizar tu rama maestra puedes eliminar el repositorio upstream, si lo desea. Pero lo necesitará para actualizar/sincronizar tu repositorio en el futuro, por lo que es una buena práctica conservarlo.
#### 8. Elimina ramas innecesarias
Las ramas son creadas para propósitos especiales. Una vez que ese propósito se cumple, aquellas ramas ya no son necesarias, por lo que puedes eliminarlas. `git branch -d [Nombre de la rama]`.
También, puedes eliminar su versión en GitHub `git push origin --delete [Nombre de la rama]`