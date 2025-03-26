import mysql from "mysql2/promise";

const dbConnection = async (params) => {
    try {
        return await mysql.createConnection(params);
    } catch (error) {
        console.error("Database Connection Error:", error);
        throw error;
    }
};

const dbQuery = async (dbCon, query, optionList = []) => {
    try {
        const [results] = await dbCon.execute(query, optionList);
        return results;
    } catch (error) {
        console.error("Query Execution Error:", error);
        throw error;
    }
};

const dbClose = async (dbCon) => {
    try {
        await dbCon.end();
    } catch (error) {
        console.error("Database Closing Error:", error);
        throw error;
    }
};

export default { dbConnection, dbQuery, dbClose };
