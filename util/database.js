// import camelcaseKeys from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

// const sql = postgres();

function connectOneTimeToDatabase() {
  // When in development, connect only once to the database
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres();
  }
  const sql = globalThis.postgresSqlClient;

  return sql;
}

// Connect to PostgresSQL
const sql = connectOneTimeToDatabase();

export async function readTours() {
  const tours = await sql`
  SELECT * FROM tours;
  `;
  return tours;
}

export async function readTour(id) {
  const [tour] = await sql`
  SELECT * FROM tours WHERE id = ${id};
  `;
  return tour;
}
