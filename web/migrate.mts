import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

// Load production environment variables
config({
  path: ".env.local",
});

// Database connection configuration
const migrationsFolderName = "drizzle"; // Set default folder name directly
const connectionString = process.env.POSTGRES_URL!;

// Initialize postgres connection
const sql = postgres(connectionString, {
  max: 1, // Limit to single connection for migrations
  ssl: false, // Disable SSL for local development
});

// Initialize Drizzle ORM
const db = drizzle(sql, {
  logger: true, // Log queries for debugging
});

// Run migrations
async function runMigrations() {
  try {
    // Test database connection
    await sql`SELECT NOW()`;
    console.log("✓ Database connection successful");

    // Run the migrations
    console.log("Starting migrations...");
    await migrate(db, { migrationsFolder: migrationsFolderName });
    console.log("✓ Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    await sql.end(); // Clean up connection
    process.exit(0);
  }
}

runMigrations();
