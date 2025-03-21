import mysql2 from 'mysql2';

export const handler = async (event) => {
  let message = '';

  try {
    const dbcon = await createDBConnection();
    console.log('Connected to database!');


    // Create table
    await createTable(dbcon);
    console.log('Table checked/created successfully.');

    await dbcon.end(); // Close the connection properly
  } catch (error) {
    console.error('Database Error:', error);
    message = `Database Operation Failed: ${error.message}`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};

async function createDBConnection() {
  return mysql2
    .createConnection({
      host: 'rds-test.456.us-east-1.rds.amazonaws.com',
      user: 'admin',
      password: 'ranaG1qaz2wsx3edc',
      port: '3306',
      database: 'rds_test', // create database using mysql workbench or use mysql-driver on linux
    })
    .promise(); // Enables async/await support
}

async function createTable(dbcon) {
  try {
    console.log('Creating table if not exists...');
    await dbcon.query(`
      CREATE TABLE IF NOT EXISTS agents (
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY(id)
      )
    `);
    console.log('Table creation successful!');
  } catch (error) {
    console.error('Error creating table:', error);
    throw error; // Throw the error to be caught by the caller
  }
}
