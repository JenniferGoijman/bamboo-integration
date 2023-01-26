require("dotenv").config();
const axios = require("axios");

const getEmployees = async () => {
  const { BAMBOO_TOKEN, BAMBOOHR_BASE_URL } = process.env;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${BAMBOO_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(
      `${BAMBOOHR_BASE_URL}/employees/directory`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getEmployees,
};
