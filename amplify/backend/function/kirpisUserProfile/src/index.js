import AWS from "aws-sdk";

// Configure AWS SDK
AWS.config.update({ region: process.env.AWS_REGION });

export const handler = async (event, context) => {
  try {
    // Perform authentication using Lambda authorizer logic
    const isAuthenticated = await authenticate(event);

    if (!isAuthenticated) {
      return {
        statusCode: 401,
        body: "Unauthorized",
      };
    }

    const { username, email } = event;

    const adminApi = new AWS.ApiGatewayManagementApi({
      endpoint: process.env.ADMIN_API_ENDPOINT,
    });

    const createEntryParams = {
      body: JSON.stringify({
        operation: "create",
        payload: {
          modelId: "User",
          input: { username, email },
        },
      }),
    };

    await adminApi.postToConnection(createEntryParams).promise();

    // Return a response if needed
    return {
      statusCode: 200,
      body: "User registration successful",
    };
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: "An error occurred",
    };
  }
};

async function authenticate(event) {
  const authorizationToken = event.headers.Authorization;
  return authorizationToken === "validToken";
}
