# Calendly

A Node.js and TypeScript API built with Express. Prisma ORM is configured for PostgreSQL.

## Prerequisites

- Node.js
- pnpm (the project declares pnpm `^11.18.0` as its package manager)

## Getting started

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Create a `.env` file in the project root. The API uses `port` for its listening port; it defaults to `3000` if omitted:

   ```dotenv
   port=3000
   ```

   Add a PostgreSQL connection string as `DATABASE_URL` if you plan to use Prisma CLI commands:

   ```dotenv
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
   ```

   Keep credentials in `.env`; it is excluded from version control.

3. Start the development server:

   ```sh
   pnpm dev
   ```

   The server restarts when files in `src` change. The health endpoint is available at [http://localhost:3000/health](http://localhost:3000/health) (or the port configured in `.env`).

   ```sh
   curl http://localhost:3000/health
   ```

   A successful response contains `"status": "ok"` and a timestamp.

## Prisma and PostgreSQL

The API currently serves the health endpoint without connecting to a database. `DATABASE_URL` is needed for Prisma CLI operations. The Prisma schema is in `prisma/schema.prisma`, and the CLI configuration is in `prisma7.config.ts`.

After changing the schema, generate the Prisma Client with:

```sh
pnpm exec prisma generate
```

Once models and migrations have been added, create and apply a development migration with:

```sh
pnpm exec prisma migrate dev
```

## Project scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the API in development mode with automatic restarts. |
