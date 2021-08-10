# El Buen Commit 
Sigue las siguientes recomendaciones cuandos hagas un commit y te irás al cielo junto con los buenos programadores.

Todo commit debe estar compuesto de lo siguiente:

**Tipo:** Es obligatorio y puede ser uno de los siguientes: feat, fix, docs, style, refactor, test, chore

**Título:** Es obligatorio y debe ser un resumen de menos de 50 caracteres.

**Cuerpo:** Es opcional y describe dos cosas ¿Qué? hace o resuelve el commit y ¿Por qué?, no se debe indicar el ¿Cómo?

**Pie:** Es opcional y hace referencia a qué ticket de pivotal resuelve o se asocia.

### Ejemplo:

> Fix: Se corrige error 500 en listado de usuarios 
>
> Se corrige error en la base de datos que daba error 500 al listar los usuarios, al realizar varias consultas simultáneas, además:
>
> - Se optimizan las consultas
> - Se crean migraciones con índices
> 
> Resuelve: #170948558
>
> Relacionados: #17094852, 17094333

Descripción de los **tipos:**

| Tipo          | Descripción                                                                       |
|---            |---                                                                                |
| **feat**      | Se implementó una nueva función o característica.                                 | 
| **fix**       | Se solucionó un bug o un error.                                                   |   
| **docs**      | Se realizaron canbios en ka documentación o comentarios.                          |   
| **style**     | Se aplicó formato, comas y puntos faltantes, indentaciones, saltos de línea, etc. | 
| **refactor**  | Refactorización del código.                                                       |   
| **test**      | Se añadieron, refactorizaron o mejoraron pruebas.                                 |   
| **chore**     | Actualización de tareas de build, configuración, se añaden paquetes de paquetes.  |     