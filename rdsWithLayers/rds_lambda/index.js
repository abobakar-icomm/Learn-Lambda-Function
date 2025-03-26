import rds from "otp/nodejs/index.js"

export const handler =async (event) => {

let params={
    "host":"",
    "port":3306,
    "username":"admin",
    "password":"ranaG1qaz2wsx3edc",
    "database":"test_db",
}

 let dbCon=  await rds.dbConnection(params)

   let query = "SELECT * FROM users";

 let results=await  rds.dbQuery(dbCon,query,[])
 let data=results[0]
 console.log(data)
 
await rds.dbClose(dbCon)

return {
    "statusCode": 200,
    "body": JSON.stringify(data),
}
}