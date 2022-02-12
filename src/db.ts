import { Pool } from "pg";

const connectionString = 'postgres://kgybryns:QYmrOJgna0yNrZxQLVAlzg6XDIbM8tXR@motty.db.elephantsql.com/kgybryns';

const db = new Pool({ connectionString });

export default db;