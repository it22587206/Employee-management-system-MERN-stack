import logger from "../utils/logger.js";

export const addemployeeController = (req, res) => {
  try {
    const { employeeName, empAge } = req.body || {};

    // Check if required parameters are missing
    if (!employeeName || !empAge) {
      logger.error("addEmployeeController - Missing required parameters");
      return res.status(400).send("Missing required parameters");
    }

    // Your business logic goes here

    // Log success
    logger.info(`addEmployeeController - Employee added: employeeName=${employeeName}, empAge=${empAge}`);
    
    // Send a success response
    res.status(200).send('Employee received');
  } catch (error) {
    // Log the error
    logger.error(`addEmployeeController - Error: ${error.message}`);

    // Send an error response
    res.status(500).send('Internal Server Error');
  }
};
