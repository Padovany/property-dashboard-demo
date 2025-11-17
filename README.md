# Utility Tracker --- Property Consumption Dashboard

A modern full-stack dashboard for tracking utility readings and
consumption trends across multiple properties.

**This project is a demo for study purposes**

Built with **Next.js**, **PostgreSQL**, **Drizzle ORM**, **Tailwind
CSS**, and **shadcn/ui** --- fully typed, fast, and ready for deployment
on **Vercel**.

------------------------------------------------------------------------

## Features

-   Dashboard Overview
    -   Consumption totals\
    -   Last 30 days chart\
    -   Recent readings table
-   Readings Management
    -   List all readings with property names\
    -   Clean, dark, minimalistic UI\
    -   Placeholder UI when no data is present
-   Property Support
    -   Multiple properties\
    -   Readings associated with each property
-   Dark Theme
    -   Tailwind + shadcn/ui components\
    -   Sidebar layout
-   Drizzle ORM
    -   Strong typing\
    -   Safe migrations\
    -   Clear schema for `properties` and `readings`

------------------------------------------------------------------------

## Tech Stack

### Frontend

-   Next.js (App Router)
-   React
-   Tailwind CSS
-   shadcn/ui
-   TypeScript

### Backend

-   Next.js Server Components
-   Drizzle ORM
-   PostgreSQL

### Charts & UI

-   Recharts
-   Lucide Icons

------------------------------------------------------------------------

## Project Structure

    src/
      app/
        layout.tsx
        page.tsx         -> Redirects to dashboard
        readings/
          page.tsx
        dashboard/
          page.tsx
      db/
        schema.ts        -> Drizzle schema
        index.ts         -> Drizzle client
      components/
        ui/              -> shadcn components

------------------------------------------------------------------------

## Database Schema

### properties

  column   type
  -------- --------------------
  id       serial primary key
  name     varchar(200)

### readings

  column       type
  ------------ --------------------------------
  id           serial primary key
  propertyId   integer (FK -\> properties.id)
  value        double
  createdAt    timestamp

------------------------------------------------------------------------

## Getting Started

### 1. Clone the repository

    git clone https://github.com/Padovany/property-dashboard-demo.git
    cd property-dashboard-demo

### 2. Install dependencies

    npm install

### 3. Configure environment variables

Create a `.env.local` file:

    DATABASE_URL="postgres://user:password@host:port/dbname" (create a database in supabase and use the connection ipv4 connection string here)

### 4. Run migrations

    npx drizzle-kit migrate

### 5. Start the development server

    npm run dev

------------------------------------------------------------------------

## Deployment

This project works perfectly on **Vercel**.

Just set `DATABASE_URL` in the Environment Variables and deploy.

Compatible with: - Supabase (Postgres) - Railway Postgres - Neon
Postgres

------------------------------------------------------------------------

## Roadmap

-   Monthly consumption calculation\
-   Cost estimation\
-   Alerts for anomalies\
-   CSV import\
-   PDF or email reports\
-   Multi-user support

------------------------------------------------------------------------

## Author

**Gustavo Padovany**\
padovany.gustavo@gmail.com

------------------------------------------------------------------------

Feel free to **start** the repo or fork it if you find this project useful!