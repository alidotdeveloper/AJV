const ajvInstance = require("./ajv-instance");

const schema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", format: "email" },
    dob: { type: "string", format: "date" },
    country: {
      type: "string",
      enum: ["US", "CA"],
    },
  },

  required: ["firstName", "lastName", "email", "country"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);
