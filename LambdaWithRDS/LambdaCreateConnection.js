import mysql2 from 'mysql2';

export const handler = async (event) => {
  let message = '';

  try {
    const dbcon = await createDBConnection();
    console.log('Connected to database!');

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
      host: 'rds-test.123.us-east-1.rds.amazonaws.com',
      user: 'admin',
      password: 'ranaG1qaz2wsx3edc',
      port: '3306',
      database: 'rds_test',  // create database using mysql workbench or use mysql-driver on linux
    })
    .promise(); // Enables async/await support
}


