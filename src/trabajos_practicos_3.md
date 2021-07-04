# Blockchain Rústica

**Fecha de entrega:** 27 de julio antes de las 19 hs.

## Objetivo

El objetivo del presente trabajo consiste en aplicar los conceptos estudiados de Concurrencia Distribuida para implementar una funcionalidad de <em>blockchain</em> simplificada.

## Introducción

La **blockchain** es una forma de almacenar información, que consiste en un registro único, consensuado y distribuido en varios nodos de una red.  @@@@@@@

Se usa para almacenar información que no puede ser alterada, como es el caso de transacciones de criptomonedas. Se puede pensar como el libro contable donde se registra cada una de esas transacciones.

## Requerimientos Funcionales



@@@@@@@@@@@@@@

## Requerimientos no funcionales

Los siguientes son los requerimientos no funcionales para la resolución de los ejercicios:

* El proyecto deberá ser desarrollado en lenguaje Rust, usando las herramientas de la biblioteca estándar.
* No se permite utilizar **crates** externos, salvo los explícitamente mencionados.
* El código fuente debe compilarse en la última versión stable del compilador y no se permite utilizar bloques unsafe.
* El código deberá funcionar en ambiente Unix / Linux.
* El programa deberá ejecutarse en la línea de comandos.
* La compilación no debe arrojar **warnings** del compilador, ni del linter **clippy**.
* Las funciones y los tipos de datos (**struct**) deben estar documentadas siguiendo el estándar de **cargo doc**.
* El código debe formatearse utilizando **cargo fmt**.
* Cada tipo de dato implementado debe ser colocado en una unidad de compilación (archivo fuente) independiente.

## Tareas a Realizar
A continuación se listan las tareas a realizar para completar el desarrollo del proyecto:

* Dividir el proyecto en threads. El objetivo es lograr que la simulación esté conformada por un conjunto de hilos de ejecución que sean lo más sencillos posible.
* Una vez obtenida la división en threads, establecer un esquema de comunicación entre ellos teniendo en cuenta los requerimientos de la aplicación. ¿Qué threads se comunican entre sı́? ¿Qué datos necesitan compartir para poder trabajar?
* Realizar la codificación de la aplicación. El código fuente debe estar documentado.
* Implementar tests unitarios de las funciones que considere relevantes.

## Entrega

La resolución del presente proyecto es en grupos de tres integrantes.

La entrega del proyecto comprende lo siguiente:

* Informe, se deberá presentar en forma digital (PDF) enviado por correo electrónico a la dirección: pdeymon@fi.uba.ar
* El código fuente de la aplicación, que se entregará únicamente por e-mail. El código fuente debe estar estructurado en un proyecto de cargo, y se debe omitir el directorio target/ en la entrega. El informe a entregar debe contener los siguientes items:
  * Una explicación del diseño y de las decisiones tomadas para la implementación de la solución.
  * Detalle de resolución de la lista de tareas anterior.
  * Diagrama que refleje los threads, el flujo de comunicación entre ellos y los datos que intercambian.
  * Diagramas de entidades realizados (structs y demás).
