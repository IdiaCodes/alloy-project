const axios = require("axios");

const data = {
  email_address: "test@example.com",
  phone_number: "1234567890",
  name_first: "John",
  name_last: "May",
  address_line_1: "123 Main St",
  address_country_code: "US",
  address_line_1: "123 Main St",
  address_country_code: "US",
  address_line_2: "Apt 4B",
  address_city: "New York",
  address_state: "NY",
  address_postal_code: "10001",
  document_ssn: "123456789",
  birth_date: "1990-05-15",
};

const config = {
  method: "post",
  url: "https://sandbox.alloy.co/v1/evaluations",
  headers: {
    authorization:
      "Basic dFE4OUFuOWdSQVZ1V01NYVVqbVZkcHBlRk9NeWo3Tlg6em1Ucnh4cTRjOXM0ZzRQeFhSOU43emhxcFpPR1Y5QUE=",
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data));
    const outcome = response.data.summary.outcome;
    if (outcome === "Approved") {
      console.log("Congratulations! You are approved.");
    } else if (outcome === "Manual Review") {
      console.log(
        "Your application is under review. Please wait for further updates."
      );
    } else if (outcome === "Denied") {
      console.log(
        "Unfortunately, we cannot approve your application at this time."
      );
    } else {
      console.log("Unexpected response:", data, outcome);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
