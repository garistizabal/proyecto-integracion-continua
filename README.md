# Conexión de dos contenedores de Docker

Este proyecto consiste en una API desarrollada con Node.js y TypeScript que se conecta a una base de datos MongoDB. La aplicación y la base de datos se ejecutan en contenedores Docker separados y se comunican entre sí a través de una red Docker.

Requisitos

- [Docker](https://docs.docker.com/get-docker/).
- [Node.js](https://nodejs.org/en) (opcional, solo si deseas ejecutar el proyecto localmente sin Docker)
- [Mongo Atlas](https://www.mongodb.com/atlas) (opcional, solo si deseas ejecutar el proyecto localmente sin Docker)

## Configuración del Proyecto

Toma de referencia el archivo `.env.example` y crea un archivo `.env` en la raíz del proyecto con las variables de entorno indicadas.

### Uso de Docker

#### Construir y Ejecutar los Contenedores

**Nota:** Docker se debe estar ejecutando.

Construye los contenedores y levanta los servicios con Docker Compose:

```bash
docker compose up
```

- La API estará disponible en <http://localhost:4000/api> y MongoDB estará accesible a través del contenedor especificado.
- Puedes generar datos de prueba en la base de datos en <http://localhost:4000/api/seed/>
- Puedes obtener los datos de prueba en <http://localhost:4000/api/todo/>

#### Detener los Contenedores

Para detener y eliminar los contenedores, ejecuta:

```bash
docker compose down
```

### Configuración local (Opcional)

#### Instalar dependencias

**Nota:** Eliminar el archivo `pnpm-lock.yaml` en caso de usar npm o yarn en vez de pnpm

```bash
npm install

```

```bash
yarn install
```

```bash
pnpm install
```

#### Modo desarrollo

```bash
npm run dev

```

```bash
yarn dev
```

```bash
pnpm dev
```

#### Modo producción

```bash
npm start
```

```bash
yarn start
```

```bash
pnpm start
```
