import  sum  from '/opt/nodejs/sum.js';

export const handler = async (event) => {
  // TODO implement
  console.log(event);
 let body= JSON.parse(event.body);
 // console.log(body);
  let num1=body["num1"]||5;
  let num2=body["num2"]||2;
  let  result = sum(num1, num2);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
  return response;
};
