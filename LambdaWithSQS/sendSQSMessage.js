import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
const sqsClient = new SQSClient({ region: "us-east-1" });

export const handler = async (event) => {
  let response;

  const params = {
    DelaySeconds: 2,
    MessageAttributes: {
      Author: {
        DataType: "String",
        StringValue: "Preeti",
      }
    },
    MessageBody: "Welcome to Icommunix",
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/3221/myTestQueue"
  };


  try {
    const data = await sqsClient.send(new SendMessageCommand(params));
    if (data) {
      console.log("Success, message sent. MessageID:", data.MessageId);
      const bodyMessage = 'Message Send to SQS- Here is MessageId: ' +data.MessageId;
      response = {
        statusCode: 200,
        body: JSON.stringify(bodyMessage),
      };
    }else{
      response = {
        statusCode: 500,
        body: JSON.stringify('Some error occured !!')
      };
    }
    return response;
  }
  catch (err) {
    console.log("Error", err);
  }

};