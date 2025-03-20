import jwt from 'jsonwebtoken';
export const handler = async (event) => {
  console.log(event);
  let token = event.headers.Authorization;
  let decoded = jwt.decode(token, 'shhhhh');
  if (decoded.username=="rana") {
    return generatePolicy('test-user', 'Allow', event.methodArn)
  }
  else{
    return generatePolicy('test-user', 'Deny', event.methodArn)
  }
};

const generatePolicy = (principalId, effect, resource) => {
  const policy = {
    principalId: principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource
        }
      ]
    }
  }
  return policy
}
