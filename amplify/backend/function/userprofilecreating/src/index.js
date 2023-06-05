/* Amplify Params - DO NOT EDIT
	API_KIRPPIS_GRAPHQLAPIENDPOINTOUTPUT
	API_KIRPPIS_GRAPHQLAPIIDOUTPUT
	API_KIRPPIS_GRAPHQLAPIKEYOUTPUT
	AUTH_KIRPPIS516E92A5_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
