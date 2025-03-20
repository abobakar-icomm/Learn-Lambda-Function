
import jwt from 'jsonwebtoken'
let numbertoadd = 0;
export const handler = async (event,context) => {
  // TODO implement
  console.log(context);
  let token = jwt.sign({token:"thisIsToken"},"tokenkey",{expiresIn:'1h'})
  console.log(token)
numbertoadd = numbertoadd + 1;
console.log(numbertoadd);
  const response = {
    statusCode: 200,
    body: {numbertoadd,token},
  };
  return response;
};
