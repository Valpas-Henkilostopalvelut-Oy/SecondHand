const AWS = require("aws-sdk");
const moment = require("moment");

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "Businesses-ogazhokjwrhp7dicxwlinvwbma-develop"; // Replace with your DynamoDB table name

exports.handler = async (event) => {
  try {
    const businesses = await getAllBusinessesFromDatabase();

    const updatedBusinesses = businesses.map((business) => {
      return updateOpenNowStatus(business);
    });

    await updateAllBusinessesInDatabase(updatedBusinesses);

    return {
      statusCode: 200,
      body: JSON.stringify(
        "OpenNow status updated successfully for all businesses."
      ),
    };
  } catch (error) {
    console.error("Error updating OpenNow status:", error);
    return {
      statusCode: 500,
      body: JSON.stringify("Error updating OpenNow status."),
    };
  }
};

async function getAllBusinessesFromDatabase() {
  const params = {
    TableName: tableName,
  };

  const { Items } = await dynamoDB.scan(params).promise();
  return Items;
}

async function updateAllBusinessesInDatabase(updatedBusinesses) {
  const updatePromises = updatedBusinesses.map(async (updatedBusiness) => {
    const params = {
      TableName: tableName,
      Item: updatedBusiness,
    };

    await dynamoDB.put(params).promise();
  });

  await Promise.all(updatePromises);
}

// ...

function updateOpenNowStatus(business) {
  const currentTime = moment();
  const currentDay = (currentTime.day() + 6) % 7; // Adjust for your program where Monday is 0

  // Check if the business object has the expected structure
  if (
    !business.openHours ||
    !business.openHours.period ||
    !Array.isArray(business.openHours.period)
  ) {
    console.error("Invalid business structure. Skipping update. Name:", business.name);
    return business;
  }

  const openPeriod = business.openHours.period.find((period) => {
    const openTime = moment()
      .zone("+02:00")
      .set("hour", period.open.hours)
      .set("minute", period.open.minute);
    const closeTime = moment()
      .zone("+02:00")
      .set("hour", period.close.hours)
      .set("minute", period.close.minute);

    // Check if it's the correct day and time
    return (
      currentDay === period.open.day &&
      currentTime.isBetween(openTime, closeTime)
    );
  });

  const updatedBusiness = { ...business };
  // console.log("updatedBusinessName", updatedBusiness.name);
  // console.log("openPeriod", Boolean(openPeriod));
  updatedBusiness.openHours.openNow = Boolean(openPeriod);

  return updatedBusiness;
}
